import React, { useState, useEffect } from "react";
import TripHeader from "./TripHeader";
import TripNavBar from "./TripNavbar";
import RequiredThings from "../../Components/RequiredThings";
import TripCard from "./TripCard";
import PlacesNearby from "./PlacesNearby";
import TripFooter from "./TripFooter";
import TripSection from "./TripSection";
export const CityContext = React.createContext();

const TripPlannerPage = (props) => {
  const [cities, setCities] = useState([]);
  const [results, setResults] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setResults((prevResults) => []);

    cities.map((obj) => {
      const cityname = obj.city.name.split(", ");
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityname[0] +
          "&units=metric" +
          "&appid=" +
          process.env.REACT_APP_APIKEY
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result["cod"] !== 200) {
              setIsLoaded(false);
            } else {
              setIsLoaded(true);
              setResults((prevResults) => [...prevResults, result]);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        .catch((e) => {
          alert(e);
        });
    });
  }, [cities]);

  return (
    <>
      <CityContext.Provider value={[results, setResults, cities, setCities]}>
        <TripHeader>
          <TripNavBar />
        </TripHeader>
        <TripSection />
        {results.length === 2 && (
          <>
            <div class="trip-container">
              <div className="heading">
                <h1 className="heading-h1">Weather Condition</h1>
              </div>
              {results.map((result) => {
                return <TripCard results={result} />;
              })}
            </div>
            <RequiredThings results={results[1]} />
            {console.log(results[1])}
            <PlacesNearby results={results} />
          </>
        )}
        <TripFooter />
      </CityContext.Provider>
    </>
  );
};

export default TripPlannerPage;
