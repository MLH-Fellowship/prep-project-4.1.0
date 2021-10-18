import "../background.css";
import "./sunny.css";

const SunnyBg = ({ children }) => {
  return (
    <div class="background" id="sunny">
      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>

      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
      </div>
      {children}
    </div>
  );
};

export default SunnyBg;
