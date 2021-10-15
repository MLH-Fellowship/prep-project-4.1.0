import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import WeatherCard from "../WeatherCard";
import "./weeklyforecast.css";

const WeeklyForecast = ({ city, latitude, longitude }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setResults(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [city, latitude, longitude]);

  if (error) {
    return <div>Error loading weekly forecast.</div>;
  } else {
    return (
      <>
        {!isLoaded && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {isLoaded && results && (
          <div className="weatherCards">
            {results &&
              results?.daily?.map((day, index) => {
                if (index !== 0) {
                  return <WeatherCard day={day} index={index} key={index} />;
                }
              })}
          </div>
        )}
      </>
    );
  }
};

export default WeeklyForecast;
