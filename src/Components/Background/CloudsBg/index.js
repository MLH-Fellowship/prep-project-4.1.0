import "../background.css";
import "./cloud.css";
import cloud1 from "./cloud1.png";
import cloud2 from "./cloud2.png";
import cloud3 from "./cloud3.png";
import cloud4 from "./cloud4.png";
import cloud5 from "./cloud5.png";

const CloudsBg = ({ children }) => {
  return (
    <div className="background" id="cloud">
      <div class="cloud-container">
        <img src={cloud1} style={{ "--i": 1 }}></img>
        <img src={cloud2} style={{ "--i": 2 }}></img>
        <img src={cloud3} style={{ "--i": 3 }}></img>
        <img src={cloud4} style={{ "--i": 4 }}></img>
        <img src={cloud5} style={{ "--i": 5 }}></img>
      </div>
      {children}
    </div>
  );
};

export default CloudsBg;
