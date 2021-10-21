import React, {useContext} from "react";
import "../trip.css";
import "./header.css";
import TripSearchFrom from "../TripSearchFrom";
import TripSearchTo from "../TripSearchTo";
import { useState } from "react";
import {CityContext} from "../index";

const TripHeader = ({ children }) => {

  const [from, setFrom, to, setTo, cities, setCities] = useContext(CityContext)

  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  // const [cities, setCities] = useState(["", ""])

  function onSearch() {
    setCities([from, to])
    cities.forEach(city => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric" +
          "&appid=" +
          process.env.REACT_APP_APIKEY
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result["cod"] !== 200) {
              alert("Location not found!");
              notifyForInvalidLocation();
              setCity("New York City");
            } else {
              setIsLoaded(true);
              setResults(result);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    });
  }

  //console.log(cities)

  return (
    <div class="tripheader">
      {children}

      <h1>Trip Planner</h1>
      <br />
      <div class="d-flex justify-content-center">
        <TripSearchFrom setFrom={setFrom} />
        <TripSearchTo setTo={setTo} />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default TripHeader;
