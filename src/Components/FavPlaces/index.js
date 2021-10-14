import React, { useState, useEffect, useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './fav.css';
import Card from '../FavPlacesCard/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import placeContext from '../../Context/placesContext';
function FavPlaceCard() {
  const [places, setPlaces] = useContext(placeContext);
  console.log(places);
  useEffect(() => {
    const bookMarkarray = localStorage.getItem('bookMarks');
    if (bookMarkarray !== null) setPlaces(JSON.parse(bookMarkarray));
  }, []);
  return (
    <div className='cards-container'>
      <div className='heading'>
        <h1 className='heading-h1'>Your Bookmarked locations:</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='fav-container'>
          <Carousel
            interval={20000}
            transitionTime={1000}
            autoPlay={false}
            axis='horizontal'
            infiniteLoop={true}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            dynamicHeight={true}
          >
            {places.map((place, idx) => {
              return <Card key={idx} place={place} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default FavPlaceCard;
