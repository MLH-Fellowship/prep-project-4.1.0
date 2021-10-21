import "../trip.css";
import "./header.css";
import SearchBox from "../../../Components/Searchbox";
import { useState } from "react";
const TripHeader = ({ children }) => {

  return (
    <div class="tripheader">
      {children}

      <h1>Trip Planner</h1>
      <br />
      <div class="d-flex justify-content-center">
        <SearchBox city1={city1} setCity={handleCity1} />
        <SearchBox city2={city2} setCity={handleCity2} />
      </div>
    </div>
  );
};

export default TripHeader;
