import React, {useContext} from "react";
import "./weathercard.css";
import { ToggleUnitsContext } from "../../App";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const WeatherCard = ({ day, index }) => {
  const [selected, setSelected] = useContext(ToggleUnitsContext);

  const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
  const unixTimestamp = day.dt;

  const milliseconds = unixTimestamp * 1000;

  const dateObject = new Date(milliseconds);

  const weekday = dateObject.toLocaleString("en-US", { weekday: "long" }); // Monday
  const month = dateObject
    .toLocaleString("en-US", { month: "long" })
    .slice(0, 3); // December
  const date = dateObject.toLocaleString("en-US", { day: "numeric" }); // 9


  return (
    <div className="weatherCard" key={index}>
      <div className="app-card__subtext">
        {weekday}, {date} {month}
      </div>
      <span>
        <img
          src={icon}
          width="70"
          height="70"
          className="card__img app-card-img-1"
          alt="card__img"
        />
        {selected? day.temp.day : "Fahren"}
        {/* {day.temp.day} °C */}
      </span>
      <div className="app-card__subtext" style={{ color: "#ccd1d9" }}>
        {capitalizeFirstLetter(day.weather[0].description)}
      </div>
      <span className="app-card__precip_wind">
        <div className="precip">
          <img
            src="https://img.icons8.com/ios/20/ffffff/wet.png"
            className="card__img app-card-img-2"
            alt="card__img"
          />
        </div>
        {day.pop}%
        <div className="wind">
          <img
            src="https://img.icons8.com/ios/20/ffffff/wind--v1.png"
            className="card__img app-card-img-3"
            alt="card__img"
          />
        </div>
        {day.wind_speed} m/s
      </span>
    </div>
  );
};

export default WeatherCard;
