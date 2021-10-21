import React, {useState, useEffect} from "react";
import TripHeader from "./TripHeader"
import TripNavBar from "./TripNavbar"
import WeatherInfo from "../../Components/WeatherInfo";
import useWeather from "../../customHooks/useWeather";

export const CityContext = React.createContext();

const TripPlannerPage = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cities, setCities] = useState(["", ""])
  const [results, setResults] = useState([])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(cities);
  
  useEffect(() => {
  cities.map(city => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.name + "&units=metric" + "&appid=" + process.env.REACT_APP_APIKEY)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            setResults([...results, result]);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    })
  }, [cities])
  console.log(results);

    return(
<>
<CityContext.Provider value={[from, setFrom, to, setTo, cities, setCities]}>
<TripHeader >
<TripNavBar />
</TripHeader>
</CityContext.Provider>
{/* <WeatherInfo data={results} /> */}

{/* <PlacesNearby city={city} setCity={onChangeCity} /> */}
</>
    )
}

export default TripPlannerPage