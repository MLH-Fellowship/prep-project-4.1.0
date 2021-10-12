import { useState } from "react";
import logo from "../../mlh-prep.png";
import Background from "../Background";
import "./header.css";

const Header = ({ city, onChangeCity, results, isLoaded }) => {
  const [image, setImage] = useState(logo);
  return (
    <Background>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div class="center-text-div">
      {isLoaded && results && (
        <h1>
          {results.weather[0].main}
          {console.log(results)}
        </h1>
      )}
        <div class="temparature">25 °C</div>
        <p class="weather">Clear Sky | New York</p>
      </div>
    </Background>

  )}
export default Header;
