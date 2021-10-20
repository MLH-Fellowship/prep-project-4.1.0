import {
  humidity as humidityIcon,
  pressure as pressureIcon,
  wind as windIcon,
  temp as sunsetIcon,
  tempDown,
  tempUp,
} from "../../assets/icons";
<<<<<<< Updated upstream

import "./weatherinfo.css";

=======
import React, { useState, useEffect } from "react";
import "./weatherinfo.css";



>>>>>>> Stashed changes
const getTime = (timeStamp) => {
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
    timeStamp * 1000
  ).getMinutes()}`;
};

const WeatherInfo = (props) => {
  const { data } = props;
<<<<<<< Updated upstream
=======

  const [dates, setddates] = useState(new Date());
 

  useEffect(async () => {
    
       
    async function fetchWeather(lat, lon){
      let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a47a5bf0eab40bab4032f07926e3e1f6`).then(value=>value.json());
      // let data = await response.json();
      // console.log(response);
      return response;
      }
      
      async function convertGeoLocation(city, country){
      let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=9b91ce824ad640db8cb4ad90fecb1c88&q=${city}%20${country}&pretty=1`).then(value => value.json());
      let result = response['results'][0]['geometry'];
      return result;
      }
      
      async function fetchDaily(date, lat, ling){
      let data = await fetchWeather(lat, ling);
      let daily = data['daily'];
      for (let i in daily){
          let converted_date = new Date(0);
          converted_date.setUTCSeconds(daily[i]['dt']);
          console.log(date, converted_date);
          if (date > converted_date || date < converted_date ){
              continue;   
          }else{
              return {
                  'temp':daily[i]['temp'],
                  'feels_like':daily[i]['feels_like']
              };
          }
      }
      return {
          'error':'sorry your date is not correct daily'
      };
      }
      
      async function fetchHourly(date, lat, ling){
          let data = await fetchWeather(lat, ling);
          let hourly = data['hourly'];
          for(let i in hourly){
              let converted_date = new Date(0);
              converted_date.setUTCSeconds(hourly[i]['dt'])
              // console.log(date, converted_date)
              if (date > converted_date || date < converted_date ){
                  continue;   
              }else{
                  return {
                      'temp':hourly[i]['temp'],
                      'feels_like':hourly[i]['feels_like']
                  };
              }
          }
          return {
              'error':'sorry your date is not correct hourly'
          };
         
      }
      
      async function checkTime(date, city, country){
          let ref_date = new Date();
          let day_ask = date.getDate();
          if (day_ask > ref_date.getDate()+2){
              let lat_ling_data = await convertGeoLocation(city, country);
              let lat = lat_ling_data['lat'];
              let ling = lat_ling_data['lng'];
              let return_data = await fetchDaily(date, lat, ling);
              return return_data;
          }
      else{
          let lat_ling_data = await convertGeoLocation(city, country);
          let lat = lat_ling_data['lat'];
          let ling = lat_ling_data['lng']
          let return_data = await fetchHourly(date, lat, ling);
          return return_data;
      }
      
      
      }
      let glocal = getLocalTime(data.timezone).dater;
   console.log("Local "+ glocal);
  //  setddates(getLocalTime(data.timezone).dater);
   
   glocal.setHours(glocal.getHours()+1);
   glocal.setSeconds(0);
   glocal.setMinutes(0);
   console.log("dateloc "+ glocal);
   
  let a = glocal.getTime() / 1000;
   
   
   
  let city = "Noida";
   let country;
   let datee = new Date(0);
  // // console.log(date);

   datee.setUTCSeconds(a);
   console.log(data.name);
   
  let x = await checkTime(datee, data.name, country);
 console.log(x);

 
}, [data]);



  const getLocalTime = (timezone_offset) => {
    var currDate = new Date();
    var offsetHours = Math.floor(timezone_offset / 3600);
    var offsetMinutes = (timezone_offset / 60) - (offsetHours * 60);
    currDate.setHours(currDate.getUTCHours() + (offsetHours));
    currDate.setMinutes(currDate.getUTCMinutes() + (offsetMinutes));
    
    var hours = currDate.getHours();
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = "0" + (hours % 12) || 12;
    var minutes = "0" + currDate.getMinutes() ;
    var finalTime = "Local Time: " + hours.substr(-2) + ":" + minutes.substr(-2) + " " + AmOrPm; 
    return {'final':finalTime,
            'dater' : currDate
          }
            
  };
 
>>>>>>> Stashed changes
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const { temp, temp_max, temp_min, pressure, humidity } = data.main;
  const isDay = data?.weather[0].icon?.includes("d");
  console.log(data);
<<<<<<< Updated upstream
=======

  


  
>>>>>>> Stashed changes
  return (
    <div class="grid-container">
      <div class="top-row">
        <div class="grid-item item1">
<<<<<<< Updated upstream
          <b>{data.name}</b>, {data.sys.country}
=======
          <b>{data.name}</b>, {data.sys.country}<br/>
          <div class="grid-item">
            {getLocalTime(data.timezone).final}
            
          </div>
>>>>>>> Stashed changes
        </div>
        <div class="grid-item item2">
          <div className="temperature-info">
            <div className="temp-head">{`${temp} °C`}</div>
          </div>
        </div>
      </div>

      <div class="middle-row">
        <div class="grid-item item3">
          <div className="max-min-temp">
            <img src={tempUp} className="weather-icon" alt="temp-icon" />{" "}
            {temp_max}°C
            <img src={tempDown} className="weather-icon" alt="temp-icon" />{" "}
            {temp_min}°C
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
                {`${getTime(data?.sys[isDay ? "sunset" : "sunrise"])}`}{" "}
                {isDay ? "am" : "pm"}
              </div>
              <div class="item-name">{isDay ? "Sunrise" : "Sunset"}</div>
            </div>
          </div>
          <div class="grid-sub-item">
            <div class="item-icon">
              <img src={windIcon} className="weather-icon" alt="temp-icon" />
            </div>
            <div class="item-information">
              <div class="item-value">{data.wind.speed}m/s</div>
              <div class="item-name">Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
