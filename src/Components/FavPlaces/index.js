import React, { useState } from 'react';
import './fav.css';
import Card from '../FavPlacesCard/index';
function FavPlaceCard() {
  const [places, setPlaces] = useState(['Delhi', 'New York City', 'Mumbai']);
  return (
    <div class='fav-container'>
      {places.map((place) => {
        return <Card place={place} />;
      })}
    </div>
  );
}

export default FavPlaceCard;
