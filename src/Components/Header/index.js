import logo from "../../mlh-prep.png";
import { useState } from "react";

const Header = ({ city, onChangeCity, results, isLoaded }) => {
  const [image, setImage] = useState(logo);
  return (
    <div>
      <img className="logo" src={image} alt="MLH Prep Logo"></img>
      {isLoaded && results && (
        <h1>
          {results.weather[0].main}
          {console.log(results)}
        </h1>
      )}
      <h2>Enter a city below 👇</h2>
      <input
        type="text"
        value={city}
        onChange={(event) => onChangeCity(event.target.value)}
      />
    </div>
  );
};

export default Header;
