import React, {useState} from 'react';
import {  Marker, Popup } from 'react-leaflet';


function MapMarker({markers,city}) {
  return (
    <>
      {markers.map((marker, idx) => 
        <Marker key={idx} position={marker} >
          <Popup>{city}</Popup>
        </Marker>
      )}
    </>
  )
}

export default MapMarker
