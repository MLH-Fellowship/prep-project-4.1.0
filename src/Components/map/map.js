import React, {useEffect, useState} from 'react'
import styles from "./map.module.css"
import L from 'leaflet'
function Map() {
    const [mapOptions, setMapOptions] = useState({});
    useEffect(() => {
        let obj = {
            center: [51.958, 9.141],
            zoom: 10
        };
        setMapOptions(obj);
        let map = new L.map('map', mapOptions);
        let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addLayer(layer);
    }, []); // empty dependency
    return (
        <div className ={styles.map} id="map" >
            
        </div>
    )
}

export default Map
