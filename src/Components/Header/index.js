import logo from "../../mlh-prep.png";
import Map from "../map/map";
import "./header.css";
import { useContext, useEffect, useState } from "react";
import placeContext from "../../Context/placesContext";
import SearchBox from "../Searchbox";
const Header = ({ city, onChangeCity, results, isLoaded }) => {
  const [included, setIncluded] = useState(false);
  const [places, setPlaces] = useContext(placeContext);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    let bookMarkarray = localStorage.getItem("bookMarks");
    if (bookMarkarray === null) bookMarkarray = [];
    else bookMarkarray = JSON.parse(bookMarkarray);

    if (bookMarkarray.includes(city.toLowerCase())) setIncluded(true);
    else setIncluded(false);
  }, [city]);
  return (
    <div>
     
      <div class="center-text-div">
        <div class="temparature">{results.main.feels_like}°C</div>
        <p class="weather">
          {results.weather[0].main} | {results.name}, {results.sys.country}
        </p>
      </div>
      <div className="input-container">
        <div className="input-div">
          <div className="inputElement">
            <div className="insideDiv">
              <div className="favo">
                {included ? (
                  <abbr title=" Remove your current bookmarked location">
                    <i
                      className="fas fa-bookmark"
                      onClick={() => {
                        let bookMarkarray = localStorage.getItem("bookMarks");
                        if (bookMarkarray === null) bookMarkarray = [];
                        else bookMarkarray = JSON.parse(bookMarkarray);
                        const index = bookMarkarray.indexOf(city.toLowerCase());
                        if (index > -1) {
                          bookMarkarray.splice(index, 1);
                        }

                        setPlaces([...bookMarkarray]);
                        localStorage.setItem(
                          "bookMarks",
                          JSON.stringify(bookMarkarray)
                        );
                        setIncluded(false);
                      }}
                    ></i>
                  </abbr>
                ) : (
                  <abbr title="Bookmark your current location">
                    <i
                      className="far fa-bookmark"
                      onClick={() => {
                        let bookMarkarray = localStorage.getItem("bookMarks");
                        if (bookMarkarray === null) bookMarkarray = [];
                        else bookMarkarray = JSON.parse(bookMarkarray);
                        if (!bookMarkarray.includes(city)) {
                          bookMarkarray.push(city.toLowerCase());
                        }

                        setPlaces([...bookMarkarray]);
                        localStorage.setItem(
                          "bookMarks",
                          JSON.stringify(bookMarkarray)
                        );
                        setIncluded(true);
                      }}
                    ></i>
                  </abbr>
                )}
              </div>
              <div className="Wrapper-fav">
                <h2>Enter a city below 👇</h2>
              <SearchBox city={city} setCity={onChangeCity} />
              </div>
            </div>
          </div>
          <div className="mapElement">
            <Map city={city} setCity={onChangeCity} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
