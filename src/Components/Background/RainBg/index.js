
import  {  useEffect, useRef } from "react";
const RainyDay = require( "./rainyday.js")

 const RainBg = ({children}) => {
    const myRef = useRef(null);

    useEffect(() => {
    const image = myRef.current;
    var engine = new RainyDay({
      image,
      blur: 30,
      onInitialized: () => {
        engine.rain([[1, 2, 8000]]);
        engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);
      }
    });
  })
    return (
        <div className="background" id="sunny" ref={myRef}>
        {children}
      </div>
    );
  
}
export default RainBg


