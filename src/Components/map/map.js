import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./map.css";
import { Map, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import MapMarker from "../MapMarker/MapMarker";
import L from "leaflet";
import LCG from "leaflet-control-geocoder";

function OurMap({ city, setCity }) {
  const mapref = useRef({});
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [showPosition, setShowPosition] = useState(false);
  const [markers, setMarkers] = useState([]);
  const API_KEY = process.env.REACT_APP_APIKEY;
  const map = mapref.current.leafletElement;
  const geocoder = L.Control.Geocoder.nominatim();
  const markerIcon = new Icon({
    iconUrl: "images/bg.jpg",
    iconSize: [35, 25],
  });
  useEffect(() => {
    async function getLatLon() {
      const { data } = await axios.get(
        `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const { coord } = data; //long lat
      const { lat, lon } = coord;
      setLat(lat);
      setLong(lon);
      setShowPosition(true);
      setMarkers([{ lat: lat, lng: lon }]);
    }
    if (city.split(",").length == 1)
      getLatLon();
  }, [city]);


  return (
    <>
      <Map
        ref={mapref}
        center={[Math.floor(lat), Math.floor(long)]}
        zoom={5}
        onClick={(e) => {
          geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), results =>  { if(results.length > 0){
            setCity(results[0].name)
            setMarkers([e.latlng]);
          } else {
            window.alert("Location not found!");
          } 
            })
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapMarker markers={markers} setMarkers={setMarkers} mapref={mapref} city={city} />
      </Map>
    </>
  );
}

export default OurMap;
