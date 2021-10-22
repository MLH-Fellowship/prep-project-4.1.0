import React, { useEffect, useState, useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "./hotel.css";


const HotelCard = (props) => {
// const getStyles= {
//     "--rating" : item.rating
// }
  return (
      <>
      <Carousel
              interval={20000}
              transitionTime={1000}
              autoPlay={false}
              axis="horizontal"
              infiniteLoop={false}
              showStatus={false}
              showIndicators={true}
              showThumbs={false}
              showArrows={false}
              dynamicHeight={true}
            >
    {props.places.map((item,index) => (

    <div style={{ padding: "25px" }}>
      <div className="hotel-card-fav">
        <h2>{item.name}</h2>
        <h3 className="hotel-head-fav">
        {item.vicinity}
          <br />
        </h3>
        {/* <div class="Stars" style={getStyles}></div> */}
        
      </div>
    </div>
    ))}
    </Carousel>
    </>
  );
}

export default HotelCard;
