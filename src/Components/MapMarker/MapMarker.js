import React, {useState} from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';


function MapMarker({markers,setMarkers}) {
  const map = useMapEvents({
    click(e) {
        console.log(e.latlng)
      const newMarker = e.latlng
      setMarkers([newMarker]);
    },
  })

  return (
    <>
      {markers.map(marker => 
        <Marker position={marker}>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )}
    </>
  )
}

export default MapMarker
