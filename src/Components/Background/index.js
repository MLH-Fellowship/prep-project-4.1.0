
import ClearSkyBg from "./ClearSkyBg";
import CloudsBg from "./CloudsBg";
import SunnyBg from "./SunnyBg";
import RainBg from "./RainBg";
import SnowBg from "./SnowBg";
import "./background.css";

const Background = ({ children, results }) => {
  
  const weather = results.weather[0].main
  if (weather === "Clear"){
    return (
      <ClearSkyBg results={ results} children = {children}/>
      )
  }else if (weather === "Clouds"){
    return(
      <CloudsBg results={ results} children = {children}/>
    )
  }else if (weather === "Sunny"){
    return(
    <SunnyBg results={ results} children = {children} /> )
  }
  else if (weather === "Snow"){
    return(
    <SnowBg results={ results} children = {children} /> )
  } 
  else{
    return(
      <div className = "background">
      {children}
    </div>
    )
  }
 
};

export default Background;
