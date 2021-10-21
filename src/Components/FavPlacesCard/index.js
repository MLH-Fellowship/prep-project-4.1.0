import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./style.css";
import { ToggleUnitsContext } from "../../Views/HomePage";

function Index(props) {
  const { place } = props;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = process.env.REACT_APP_APIKEY;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weekly, setWeekly] = useState([]);
  const [minTemp, setminTemp] = useState([]);
  const [maxTemp, setmaxTemp] = useState([]);
  const [selected, setSelected] = useContext(ToggleUnitsContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    async function getDetails() {
      const { data } = await axios.get(
        `${BASE_URL}weather?q=${place}&units=metric&appid=${API_KEY}`
      );
      const { coord } = data; //long lat
      const { lat, lon } = coord;
      let oneApiData = await axios.get(
        `${BASE_URL}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      oneApiData = oneApiData.data;
      const { current } = oneApiData;

      setWind(current.wind_speed);
      setHumidity(current.humidity);
      setIcon(current.weather[0].icon);
      setDescription(current.weather[0].description);

      let temp = current.temp;

      setTemperature(temp);

      const requiredDays = [];
      const date = new Date().getDay();
      for (let i = date; i < date + 5; i++) requiredDays.push((i + 1) % 7);

      setWeekly(
        requiredDays.map((idx) => {
          return days[idx];
        })
      );
      const daily = oneApiData.daily;
      const filteredDailyData = daily.filter((ele, idx) => {
        return idx < 5;
      });
      setminTemp(
        filteredDailyData.map((dailyObject, idx) => {
          return dailyObject.temp.min;
        })
      );

      setmaxTemp(
        filteredDailyData.map((dailyObject, idx) => {
          return dailyObject.temp.max;
        })
      );
    }
    getDetails();
  }, []);

  return (
    <div style={{ padding: "25px" }}>
      <div className="card-fav">
        <h2>{capitalizeFirstLetter(place)}</h2>
        <h3 className="head-fav">
          {capitalizeFirstLetter(description)}
          <br />
          <span>
            Wind {wind}km/h <span className="dot">•</span> Humidity {humidity}%
          </span>
        </h3>
        <h1 className="h1-heading">
          {/* {Math.floor(temperature)}°C */}
          {selected
            ? Math.floor(temperature).toPrecision(4) + " °C"
            : (Math.floor(temperature) * 1.8 + 32).toPrecision(4) + " °F"}
        </h1>
        <div className="image">
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            className="imageicon"
            alt="icon"
          />
        </div>
        <table>
          <tr>
            {weekly.map((day) => {
              return <td>{day}</td>;
            })}
          </tr>
          <tr>
            {minTemp.map((temp) => {
              return (
                <td>
                  {/* {Math.floor(temp)}°C */}
                  {selected
                    ? Math.floor(temp).toPrecision(2) + " °C"
                    : (Math.floor(temp) * 1.8 + 32).toPrecision(2) + " °F"}
                </td>
              );
            })}
          </tr>
          <tr>
            {maxTemp.map((temp) => {
              return (
                <td>
                  {selected
                    ? Math.floor(temp).toPrecision(2) + " °C"
                    : (Math.floor(temp) * 1.8 + 32).toPrecision(2) + " °F"}
                </td>
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Index;
