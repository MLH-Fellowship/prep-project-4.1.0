import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";

import FavPlaceCard from "./Components/FavPlaces";
import placeContext from "./Context/placesContext";
import Loader from "react-loader-spinner";
import WeeklyForecast from "./Components/WeeklyForecast";
import Navbar from "./Components/navbar/Navbar";
import Background from "./Components/Background";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const [bookmarks, setBookMarks] = useState([]);
  const [places, setPlaces] = useState([]);

  const notify = () => {
    toast.info("Permission denied. Showing results for New York City.", {
      theme: "colored",
      hideProgressBar: true,
      closeButton: false,
    });
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: Infinity,
    };

    function onSuccess(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_APIKEY}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCity(result.name);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }

    function onError(error) {
      notify();
      setCity("New York City");
    }

    window.navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      options
    );
  }, []);

  useEffect(() => {
    if (city !== "") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric" +
          "&appid=" +
          process.env.REACT_APP_APIKEY
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result["cod"] !== 200) {
              setIsLoaded(false);
            } else {
              setIsLoaded(true);
              setResults(result);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [city]);

  const handleCity = (city) => {
    setCity(city);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        {!isLoaded && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={70}
            width={70}
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999
            }}
          />
        )}
        <Navbar/>

        {isLoaded && results && <ToastContainer autoClose={4000} />}


        {results && (
          <placeContext.Provider value={[places, setPlaces]}>
            <Background results={results}>
              <Header
                city={city}
                onChangeCity={handleCity}
                results={results}
                isLoaded={isLoaded}
              />
              <div className="heading">
                <h1 className="heading-h1">Don't forget to bring your</h1>
              </div>
              <Card results={results}/>
              <div className="heading">
                <h1 className="heading-h1">Weekly Forecast</h1>
              </div>
              <div className="weeklyForecast" style={{ marginTop: "30px" }}>
                {!isLoaded && (
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                )}
                {isLoaded && results && (
                  <WeeklyForecast
                    city={city}
                    latitude={results.coord.lat}
                    longitude={results.coord.lon}
                  />
                )}
              </div>
              <FavPlaceCard />
            </Background>
          </placeContext.Provider>
        )}
      </>
    );
  }
}

export default App;
