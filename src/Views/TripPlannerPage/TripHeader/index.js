import React, { useContext } from "react";
import "../trip.css";
import "./header.css";
import TripSearchFrom from "../TripSearchFrom";
import TripSearchTo from "../TripSearchTo";
import { useState } from "react";
import { CityContext } from "../index";

const TripHeader = ({ children }) => {
  const [results, setResults, cities, setCities] = useContext(CityContext);

  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});

  function onSearch(event) {
    event.preventDefault();
    setCities([from, to]);
  }

  return (
    <div class="tripheader">
      {children}

      <h1>Trip Planner</h1>
      <h4>Are you planing a Trip? Well you came to the right place!</h4>
      <br />
      <div class="d-flex justify-content-center">
        <form onSubmit={onSearch}>
          <TripSearchFrom setFrom={setFrom} />
          <TripSearchTo setTo={setTo} />
          <input
            className="submitButton"
            type="submit"
            required
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TripHeader;
