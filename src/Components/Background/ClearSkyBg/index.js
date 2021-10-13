import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "../background.css";

const ClearSkyBg = ({ children}) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  // const weather = results.weather[0].main
  useEffect(() => {
    if(!vantaEffect){
        setVantaEffect( CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          speed :1.5
        }))
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="background" id="clearsky" ref={myRef}>
      {children}
    </div>
  );
};

export default ClearSkyBg;