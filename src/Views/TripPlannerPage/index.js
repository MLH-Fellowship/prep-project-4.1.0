import React, { useState, useEffect } from "react";
import TripHeader from "./TripHeader";
import TripNavBar from "./TripNavbar";
import RequiredThings from "../../Components/RequiredThings";

export const CityContext = React.createContext();

const TripPlannerPage = (props) => {
  const [cities, setCities] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  function getPara(){
    console.log('results is ',results);
    console.log('results length is',results.length);
    console.log('results',results[0])
  }
  useEffect(() => {
    cities.map((obj) => {
      console.log(obj);
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
              if (obj.type === "from") {
                // results.splice(0, 0, result);
                console.log('result before pushing 0',result);
                setResults([...results,result]);
               
              } else {
                // results.splice(1, 0, result);
                console.log('result before pushing 1',result);
                setResults([...results,result]);
              }
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        ).catch((e)=>{
          alert(e);
        });
    });
  }, [cities]);

  return (
    <>
      <CityContext.Provider value={[results, setResults, cities, setCities]}>
      {getPara()}
        <TripHeader>
          <TripNavBar />
        </TripHeader>
       {results.length > 0 && <RequiredThings results={results[0]} />}
      </CityContext.Provider>
   

      {/* <PlacesNearby city={city} setCity={onChangeCity} /> */}
    </>
  );
};

export default TripPlannerPage;



