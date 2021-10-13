import React from "react";
import "./weathercard.css";

const WeatherCard = ({ day, index }) => {
  return (
    <div className="weatherCard" key={index}>
      {day.humidity}
    </div>
  );
};

export default WeatherCard;
