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
        <h1 className='heading-h1'>Bookmarked locations</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {places?.length === 0 ? (
          <h2>No Bookmarks yet!</h2>
        ) : (
          <div
            className={
              places?.length === 1
                ? `fav-container one`
                : places?.length === 2
                ? `fav-container two`
                : `fav-container`
            }
            style={{
              width:
                places?.length === 1
                  ? `25%`
                  : places?.length === 2
                  ? `50%`
                  : `75%`,
            }}
          >
            <Carousel
              interval={20000}
              transitionTime={1000}
              autoPlay={false}
              axis='horizontal'
              infiniteLoop={false}
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
        )}
      </div>
    </div>
  );
}

export default FavPlaceCard;
