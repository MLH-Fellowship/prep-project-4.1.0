import React, { useState, useEffect, useRef } from "react";
import CLOUDS2 from "vanta/dist/vanta.clouds2.min";
import noise from "../noise.png"
import "../background.css";

const CloudsBg = ({ children, results }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const weather = results.weather[0].main
  useEffect(() => {
      if(!vantaEffect){
        setVantaEffect( CLOUDS2({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          texturePath: noise
        }))
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, weather]);
  return (
    <div className="background" id="clouds" ref={myRef}>
      {children}
    </div>
  );
};

export default CloudsBg;