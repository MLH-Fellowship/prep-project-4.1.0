import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import FavPlaceCard from "../../Components/FavPlaces";
import placeContext from "../../Context/placesContext";
import Loader from "react-loader-spinner";
import Navbar from "../../Components/navbar/Navbar";
import Background from "../../Components/Background";
import RequiredThings from "../../Components/RequiredThings";
import WeeklyForecastContainer from "../../Components/WeeklyForecastContainer";
import useWeather from "../../customHooks/useWeather";
import { ToastContainer, toast } from "react-toastify";
import alanBtn from "@alan-ai/alan-sdk-web";
import "react-toastify/dist/ReactToastify.css";
import Alert from "../../Components/Alert/index";

export const ToggleUnitsContext = React.createContext();

const HomePage = () => {
  const [selected, setSelected] = useState(true);

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
            <ToggleUnitsContext.Provider value={[selected, setSelected]}>
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
              <Alert city={city} />
            </ToggleUnitsContext.Provider>
          </placeContext.Provider>
        )}
      </>
    );
  }
};

export default HomePage;
