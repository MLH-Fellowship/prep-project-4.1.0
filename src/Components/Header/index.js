import { useState } from "react";
import logo from "../../mlh-prep.png";
import Map from '../map/map';
import "./header.css";

const Header = ({ city, onChangeCity, results, isLoaded }) => {
  return (
    <div > 
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div class="center-text-div">
        <div class="temparature">{results.main.feels_like}°C</div>
        <p class="weather">{results.weather[0].main} | {results.name}, {results.sys.country}</p>
      </div>
      <div className='input-container'>
        <div className='input-div'>
          <div className='inputElement'>
            <div className='insideDiv'>
              <h2>Enter a city below 👇</h2>
              <input
                type='text'
                value={city}
                onChange={(event) => onChangeCity(event.target.value)}
              />
            </div>
          </div>
          <div className='mapElement'>
            <Map city={city} setCity={onChangeCity} />
          </div>
        </div>
      </div>
    </div>




  )}
export default Header;
