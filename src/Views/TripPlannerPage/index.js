import React from "react";
import TripHeader from "./TripHeader"
import TripNavBar from "./TripNavbar"
import WeatherInfo from "../../Components/WeatherInfo";
import useWeather from "../../customHooks/useWeather";

export const CityContext = React.createContext();

const TripPlannerPage = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cities, setCities] = useState(["", ""])

  console.log(cities);

    // const {
    //     city,
    //     results,
    //     isLoaded,
    //     setCity,
    //     setResults,
    //     places,
    //     setPlaces,
    //     error,
    //   } = useWeather();
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