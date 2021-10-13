import React, { useState, useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "../background.css";

const SunnyBg = ({ children, results }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const weather = results.weather[0].main
  useEffect(() => {
    if(!vantaEffect){
        setVantaEffect( CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor : 0xff9919,
          cloudShadowColor : 0xff6633,
          scale: 1.00,
          speed :1.5
        }))
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, weather]);
  return (
    <div className="background" id="sunny" ref={myRef}>
      {children}
    </div>
  );
};

export default SunnyBg;