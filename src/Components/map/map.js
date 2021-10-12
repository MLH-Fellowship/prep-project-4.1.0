import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './map.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
function OurMap(props) {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [showPosition, setShowPosition] = useState(false);
  const API_KEY = process.env.REACT_APP_APIKEY;
  const { city } = props;
  const markerIcon = new Icon({
    iconUrl: 'images/bg.jpg',
    iconSize: [35, 25],
  });

  useEffect(() => {
    async function getLatLon() {
      const { data } = await axios.get(
        `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const { coord } = data; //log lat
      console.log('data', coord);
      const { lat, lon } = coord;
      setLat(lat);
      setLong(lon);
      setShowPosition(true);
    }
    getLatLon();
  });
  return (
    <>
      <MapContainer center={[29, 76]} zoom={5}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showPosition && <Marker icon={markerIcon} position={[lat, long]} />}
      </MapContainer>
    </>
  );
}

export default OurMap;
