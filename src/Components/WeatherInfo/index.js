import {
  humidity as humidityIcon,
  pressure as pressureIcon,
  wind as windIcon,
  temp as sunsetIcon,
  tempDown,
  tempUp,
} from "../../assets/icons";
import React, { useState, useEffect } from "react";
import "./weatherinfo.css";

const getTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();


  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
};

const WeatherInfo = (props) => {
  const { data } = props;

  const [dates, setddates] = useState(new Date());
  const [hourlyData, setHourlyData] = useState(new Array());
 

  useEffect(async () => {    
      async function fetchWeather(lat, lon){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`).then(value=>value.json());
        return response;
      }

      async function convertGeoLocation(city, country){
        let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_GEOCODEKEY}&q=${city}%20&pretty=1`).then(value => value.json());
        console.log(response)
        let result = response['results'][0]['geometry'];
        return result;
      }

    

      async function fetchHourly(lat, ling){
          
          let data = await fetchWeather(lat, ling);
          let hourly = data['hourly'];
          let return_arr = []
          let number_of_hours = 6
          
          for(let i = 0; i<number_of_hours; i++){
              return_arr.push( {
                  'temp':hourly[i]['temp'],
                  'feels_like':hourly[i]['feels_like']
              });
          }
          return {
              "data":return_arr
          }        
      }

      let geo_lat_ling = await convertGeoLocation(data.name)
      let y = geo_lat_ling['lng']
      let z = geo_lat_ling['lat']

      let x = await fetchHourly(z, y); 
      console.log(x["data"])
      setHourlyData(x["data"]);
  }, [data]);



  const getLocalTime = (timezone_offset) => {
    var currDate = new Date();
    var offsetHours = Math.floor(timezone_offset / 3600);
    var offsetMinutes = (timezone_offset / 60) - (offsetHours * 60);
    currDate.setHours(currDate.getUTCHours() + (offsetHours));
    currDate.setMinutes(currDate.getUTCMinutes() + (offsetMinutes));
    
    var hours = currDate.getHours();
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = "0" + ((hours % 12) || 12);
    var minutes = "0" + currDate.getMinutes() ;
    var finalTime = "Local Time: " + hours.substr(-2) + ":" + minutes.substr(-2) + " " + AmOrPm; 
    return {'final':finalTime,
            'dater' : currDate
          }
            
  };
 
  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const { temp, temp_max, temp_min, pressure, humidity } = data.main;
  const isDay = data?.weather[0].icon?.includes("d");
  console.log(data);

  


  
  return (
    <div class="grid-container">
      <div class="top-row">
        <div class="grid-item item1">
          <b>{data.name}</b>, {data.sys.country}<br/>
          <div class="grid-item">
            {getLocalTime(data.timezone).final}
            
          </div>
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
              <div class="item-value">{data.wind.speed}m/s</div>
              <div class="item-name">Wind</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-item item5">
        <div class="hourly-information">
          {
            hourlyData.map((val, index) => {
              return <div key={index} class="grid-sub-item hourly-padding">  
                  <div class="item-icon">
                    +{index+1} H: 
                  </div>
                  <div class="item-information">
                    <div class="item-value">Feels like: {(val.feels_like + "0").substr(0,5)}</div>
                    <div class="item-name">Temp: {val.temp}</div>
                  </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
