import TripHeader from "./TripHeader"
import TripNavBar from "./TripNavbar"
import WeatherInfo from "../../Components/WeatherInfo";
import useWeather from "../../customHooks/useWeather";
const TripPlannerPage = (props) => {
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

<TripHeader >
<TripNavBar />
</TripHeader>
{/* <WeatherInfo data={results} /> */}


</>
    )
}

export default TripPlannerPage