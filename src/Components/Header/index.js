import Map from "../map/map";
import "./header.css";
import SearchBox from "../Searchbox";

const Header = ({ city, setCity }) => {
  return (
    <>
      <div className="input-container">
        <div className="input-div">
          <div className="inputElement">
            <div className="insideDiv">
              <h2>Enter a city below 👇</h2>
              <SearchBox city={city} setCity={setCity} />
            </div>
          </div>
          <div className="mapElement">
            <Map city={city} setCity={setCity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
