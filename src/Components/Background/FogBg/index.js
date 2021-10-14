import "../background.css";
import "./fog.css";
const FogBg = ({ children }) => {
  return (
    <div class="background" id="fogbg">
      <div class="absolute-bg" id="fog"></div>
      <div class="fog-container">
        <div class="fog-img fog-img-first"></div>
        <div class="fog-img fog-img-second"></div>
      </div>
      {children}
    </div>
  );
};

export default FogBg;
