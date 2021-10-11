import React, { useEffect, useState } from 'react';
import styles from './map.module.css';
import L from 'leaflet';
function Map() {
  const [mapOptions, setMapOptions] = useState({});
  useEffect(() => {
    let obj = {
      center: [51.958, 9.141],
      zoom: 10,
    };
    setMapOptions(obj);
    var map = L.map('map').setView([29, 76], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
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
