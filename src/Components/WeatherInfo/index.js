import {
  humidity as humidityIcon,
  pressure as pressureIcon,
  wind as windIcon,
  temp as sunsetIcon,
  tempDown,
  tempUp,
} from "../../assets/icons";
import { ToggleUnitsContext } from "../../Views/HomePage";
import React, { useContext } from "react";
import "./weatherinfo.css";

const getTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
};

const WeatherInfo = (props) => {
  const { data } = props;
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const { temp, temp_max, temp_min, pressure, humidity } = data.main;
  const isDay = data?.weather[0].icon?.includes("d");
  const [selected, setSelected] = useContext(ToggleUnitsContext);
  console.log(data);
  return (
    <div class="grid-container">
      <div class="top-row">
        <div class="grid-item item1">
          <b>{data.name}</b>, {data.sys.country}
        </div>
        <div class="grid-item item2">
          <div className="temperature-info">
            <div className="temp-head">{`${
              selected
                ? Math.floor(temp).toPrecision(4) + " °C"
                : (Math.floor(temp) * 1.8 + 32).toPrecision(4) + " °F"
            }`}</div>
          </div>
        </div>
      </div>

      <div class="middle-row">
        <div class="grid-item item3">
          <div className="max-min-temp">
            <img src={tempUp} className="weather-icon" alt="temp-icon" />{" "}
            {selected
              ? Math.floor(temp_max).toPrecision(4) + " °C"
              : (Math.floor(temp_max) * 1.8 + 32).toPrecision(4) + " °F"}
            <img src={tempDown} className="weather-icon" alt="temp-icon" />{" "}
            {selected
              ? Math.floor(temp_min).toPrecision(4) + " °C"
              : (Math.floor(temp_min) * 1.8 + 32).toPrecision(4) + " °F"}
          </div>
        </div>
        <div class="grid-item item4">
          <div className="temp-status-icon">
            <img src={icon} alt="weather-icon" />
          </div>
          <div className="temp-status">{data.weather[0].main}</div>
        </div>
      </div>

      <div class="grid-item item5">
        <div class="other-information">
          <div class="grid-sub-item">
            <div class="item-icon">
              <img
                src={humidityIcon}
                className="weather-icon"
                alt="temp-icon"
              />
            </div>
            <div class="item-information">
              <div class="item-value">{humidity}%</div>
              <div class="item-name">Humidity</div>
            </div>
          </div>
          <div class="grid-sub-item">
            <div class="item-icon">
              <img
                src={pressureIcon}
                className="weather-icon"
                alt="temp-icon"
              />
            </div>
            <div class="item-information">
              <div class="item-value">{pressure}hPa</div>
              <div class="item-name">Pressure</div>
            </div>
          </div>
          <div class="grid-sub-item">
            <div class="item-icon">
              <img src={sunsetIcon} className="weather-icon" alt="temp-icon" />
            </div>
            <div class="item-information">
              <div class="item-value">
                {`${getTime(data?.sys[isDay ? "sunrise" : "sunset"])}`}{" "}
              </div>
              <div class="item-name">{isDay ? "Sunrise" : "Sunset"}</div>
            </div>
          </div>
          <div class="grid-sub-item">
            <div class="item-icon">
              <img src={windIcon} className="weather-icon" alt="temp-icon" />
            </div>
            <div class="item-information">
              <div class="item-value">
                {/* {data.wind.speed}m/s */}
                {selected
                  ? data.wind.speed.toPrecision(2) + " m/s"
                  : (data.wind.speed * 3.6).toPrecision(2) + " km/hr"}
              </div>
              <div class="item-name">Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
