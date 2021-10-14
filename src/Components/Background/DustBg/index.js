import "../background.css";
import "../FogBg/fog.css";
const DustBg = ({ children }) => {
  return (
    <div class="background" id="fogbg">
      <div class="absolute-bg" id="dust"></div>
      <div class="fog-container">
        <div class="fog-img fog-img-first"></div>
        <div class="fog-img fog-img-second"></div>
      </div>
      {children}
    </div>
  );
};

export default DustBg;
