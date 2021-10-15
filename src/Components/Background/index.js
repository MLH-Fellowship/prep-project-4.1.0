import ClearSkyBg from "./ClearSkyBg";
import CloudsBg from "./CloudsBg";
import SunnyBg from "./SunnyBg";
import SnowBg from "./SnowBg";
import ThunderStromBg from "./ThunderstromBg";
import FogBg from "./FogBg";
import DustBg from "./DustBg";
import RainyBg from "./RainyBg";
import "./background.css";

const Background = ({ children, results }) => {
  const weather = results.weather[0].main;
  if (weather === "Clear") {
    return <DustBg children={children} />;
  } else if (weather === "Clouds") {
    return <CloudsBg children={children} />;
  } else if (weather === "Sunny") {
    return <SunnyBg children={children} />;
  } else if (weather === "Snow") {
    return <SnowBg children={children} />;
  } else if (weather === "Thunderstorm") {
    return <ThunderStromBg children={children} />;
  } else if (weather === "Rain" || weather === "Drizzle") {
    return <RainyBg children={children} />;
  } else if (
    weather === "Mist" ||
    weather === "Smoke" ||
    weather === "Haze" ||
    weather === "Fog"
  ) {
    return <FogBg children={children} />;
  } else if (
    weather === "Dust" ||
    weather === "Sand" ||
    weather === "Ash" ||
    weather === "Squall" ||
    weather === "Tornado"
  ) {
    return <DustBg children={children} />;
  } else {
    return <div className="background">{children}</div>;
  }
};

export default Background;
