import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import FavPlaceCard from "./Components/FavPlaces";
import placeContext from "./Context/placesContext";
import Loader from "react-loader-spinner";
import WeeklyForecast from "./Components/WeeklyForecast";
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from "./Components/navbar/Navbar";
import Background from "./Components/Background";
import RequiredThings from "./Components/RequiredThings";
import WeeklyForecastContainer from "./Components/WeeklyForecastContainer";
import useWeather from "./customHooks/useWeather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
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

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_APIKEY,
      onCommand: function (commandData) {
        if (commandData.command === "search") {
          setCity(commandData.text);
        }
        if (commandData.command === "handleCity") {
          setCity(commandData.cityname);
        }
        if (commandData.command === "scrollToWeeklyForecast") {
          window.scrollTo({
            top: document.querySelector(".weatherCards").offsetTop,
            behavior: "smooth",
          });
        }
      },
    });
  }, []);

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
              <Navbar />
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
