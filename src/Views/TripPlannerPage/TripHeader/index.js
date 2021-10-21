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
