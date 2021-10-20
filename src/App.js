import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import FavPlaceCard from "./Components/FavPlaces";
import placeContext from "./Context/placesContext";
import Loader from "react-loader-spinner";
import Navbar from "./Components/navbar/Navbar";
import Background from "./Components/Background";
import RequiredThings from "./Components/RequiredThings";
import WeeklyForecastContainer from "./Components/WeeklyForecastContainer";
import useWeather from "./customHooks/useWeather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toggleContext = React.createContext();

function App() {
  const [selected, toggleSelected] = useState(true);

  const {
    city,
    results,
    isLoaded,
    setCity,
    setResults,
    places,
    setPlaces,
    error,
  } = useWeather();

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
              zIndex: 9999,
            }}
          />
        )}

        {isLoaded && results && <ToastContainer autoClose={4000} />}

        {results && (
          <placeContext.Provider value={[places, setPlaces]}>
            <Background results={results}>
              <toggleContext.Provider value={selected}>
                <Navbar />
              </toggleContext.Provider>
              <Header
                city={city}
                onChangeCity={handleCity}
                results={results}
                isLoaded={isLoaded}
              />
              <RequiredThings results={results} />
              <WeeklyForecastContainer
                results={results}
                city={city}
                isLoaded={isLoaded}
              />
              <FavPlaceCard />
            </Background>
          </placeContext.Provider>
        )}
      </>
    );
  }
}

export default App;
