import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
function Index(props) {
  const { place } = props;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
  const API_KEY = process.env.REACT_APP_APIKEY;
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
      console.log(oneApiData);
      const wind = oneApiData?.current?.wind_speed;
      const humidity = oneApiData?.current?.humidity;
    }
    getDetails();
  }, []);

  return (
    <div class='card-fav'>
      <h2>Brussels</h2>
      <h3 class='head-fav'>
        Cloudy
        <span>
          Wind 10km/h <span class='dot'>•</span> Precip 0%
        </span>
      </h3>
      <h1>23°</h1>
      <div class='sky'>
        <div class='sun'></div>
        <div class='cloud'>
          <div class='circle-small'></div>
          <div class='circle-tall'></div>
          <div class='circle-medium'></div>
        </div>
      </div>
      <table>
        <tr>
          <td>TUE</td>
          <td>WED</td>
          <td>THU</td>
          <td>FRI</td>
          <td>SAT</td>
        </tr>
        <tr>
          <td>30°</td>
          <td>34°</td>
          <td>36°</td>
          <td>34°</td>
          <td>37°</td>
        </tr>
        <tr>
          <td>17°</td>
          <td>22°</td>
          <td>19°</td>
          <td>23°</td>
          <td>19°</td>
        </tr>
      </table>
    </div>
  );
}

export default Index;
