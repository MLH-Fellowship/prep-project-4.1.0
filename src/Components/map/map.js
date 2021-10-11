import React, { useEffect, useState } from 'react';
import styles from './map.module.css';
import axios from 'axios';
import L from 'leaflet';
function Map(props) {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const API_KEY = process.env.REACT_APP_APIKEY;
  const { city } = props;
  console.log(city);
  useEffect(() => {
    async function initializeLatLong(value) {
      const { data } = await axios.get(
        `${BASE_URL}weather?q=${value}&units=metric&appid=${API_KEY}`
      );

      const { coord } = data; //log lat
      console.log('data', coord);
      const { lat, lon } = coord;
      setLat(lat);
      setLong(lon);
      L.marker([lat, long], {
        icon: markerIcon,
      }).addTo(map);

      console.log('Marker added');
    }

    var map = L.map('map').setView([29, 76], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var markerIcon = L.icon({
      iconUrl: `images/bg.jpg`,
      iconSize: [50, 50], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: `${styles.markerImage}`,
    });

    initializeLatLong(city);
  }, []); // empty dependency
  return (
    <>
      <div className={styles.mapcontainer}>
        <div className={[styles.map, 'map'].join(' ')} id='map'></div>
      </div>
    </>
  );
}

export default Map;
