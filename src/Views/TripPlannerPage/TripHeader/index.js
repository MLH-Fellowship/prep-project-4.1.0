import "../trip.css";
import "./header.css";
import SearchBox from "../../../Components/Searchbox";
import { useState } from "react";
const TripHeader = ({ children }) => {

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  const handleCity1 = (city) => {
    setCity1(city);
  };

  const handleCity2 = (city) => {
    setCity2(city);
  };

  return (
    <div class="tripheader">
      {children}

           <h1>Trip Planner</h1>
      <br />
      <div class="d-flex justify-content-center">
        {/* <form action="#"> */}
          {/* <div class="form-group d-sm-flex">
            <div class="d-flex ml-2 align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
              {" "} */}
              <SearchBox city1={city1} setCity={handleCity1} />
              {/* <div class="label" id="from"></div>
            </div>
            <div class="d-flex ml-2 align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
              {" "} */}
              <SearchBox city2={city2} setCity={handleCity2} />
              {/* <div class="label" id="to"></div> */}
            {/* </div>
          </div>
        </form> */}
        </div>
    </div>
  );
};

export default TripHeader;
