import React, { useState, useEffect } from 'react';
import './fav.css';
import Card from '../FavPlacesCard/index';
function FavPlaceCard() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const bookMarkarray = localStorage.getItem('bookMarks');
    if (bookMarkarray !== null) setPlaces(JSON.parse(bookMarkarray));
  }, []);
  return (
    <div className='fav-container'>
      {places.map((place) => {
        return <Card place={place} />;
      })}
    </div>
  );
}

export default FavPlaceCard;
