import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Background from "./Components/Background";
import Loader from "react-loader-spinner";


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  
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
      setError(error);
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
      <Background results={results}>
      {/* {results && ( */}
          <Header
            city={city}
            onChangeCity={handleCity}
            results={results}
            isLoaded={isLoaded}
          />
        {/* )} */}
        {/* <h2>Enter a city below 👇</h2>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        /> */}
      
        {/* <img className='logo' src={logo} alt='MLH Prep Logo'></img>
        <div>
        <Header city={city} setCity={setCity} /> */}
        <div className="Results">
          {!isLoaded && (
            <Loader
              type="Oval"
              color="#00BFFF"
              height={40}
              width={40}
              style={{ marginTop: "40px" }}
            />
          )}
          {console.log(results)}
          {isLoaded && results && <> <Card results={results} />
          <Card results={results} />
          <Card results={results} /> </>}
        </div>
      </ Background>

    );
  }
}

export default App;
