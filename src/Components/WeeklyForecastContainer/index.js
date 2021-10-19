import React from "react";
import Loader from "react-loader-spinner";
import WeeklyForecast from "../WeeklyForecast/index";

function WeeklyForecastContainer({ isLoaded, results, city }) {
  return (
    <>
      <div className="heading" id="Weekly">
        <h1 className="heading-h1">Weekly Forecast</h1>
      </div>
      <div className="weeklyForecast" style={{ marginTop: "30px" }}>
        {!isLoaded && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {isLoaded && results && (
          <WeeklyForecast
            city={city}
            latitude={results.coord.lat}
            longitude={results.coord.lon}
          />
        )}
      </div>
    </>
  );
}

export default WeeklyForecastContainer;
