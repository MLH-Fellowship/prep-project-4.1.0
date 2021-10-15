import "../background.css";
import "./clearsky.css"

const ClearSkyBg = ({ children }) => {
 
  return (
    <div className="background" id="clearsky" >
       <div class="absolute-bg" id="sky"></div> 
     <div class="sky-container">
      <div class="sky-img"></div>
      
      </div>
      {children}
      </div>
  );
};

export default ClearSkyBg;
