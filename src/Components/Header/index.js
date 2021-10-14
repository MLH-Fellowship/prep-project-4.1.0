import Map from '../map/map';
import './header.css';
import { useContext, useEffect, useState } from 'react';
import placeContext from '../../Context/placesContext';
const Header = ({ city, setCity }) => {
  const [included, setIncluded] = useState(false);
  const [places, setPlaces] = useContext(placeContext);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    let bookMarkarray = localStorage.getItem('bookMarks');
    if (bookMarkarray === null) bookMarkarray = [];
    else bookMarkarray = JSON.parse(bookMarkarray);

    if (bookMarkarray.includes(city)) setIncluded(true);
    else setIncluded(false);
  }, [city]);
  return (
    <>
      <div className='input-container'>
        <div className='input-div'>
          <div className='inputElement'>
            <div className='insideDiv'>
              <div className='favo'>
                {included ? (
                  <abbr title='World Health Organization'>
                    <i className='fas fa-bookmark'></i>
                  </abbr>
                ) : (
                  <abbr title='World Health Organization'>
                    <i
                      className='far fa-bookmark'
                      onClick={() => {
                        let bookMarkarray = localStorage.getItem('bookMarks');
                        if (bookMarkarray === null) bookMarkarray = [];
                        else bookMarkarray = JSON.parse(bookMarkarray);
                        if (!bookMarkarray.includes(city)) {
                          bookMarkarray.push(capitalizeFirstLetter(city));
                        }

                        setPlaces([...bookMarkarray]);
                        localStorage.setItem(
                          'bookMarks',
                          JSON.stringify(bookMarkarray)
                        );
                        setIncluded(true);
                      }}
                    ></i>
                  </abbr>
                )}
              </div>
              <div className='Wrapper-fav'>
                <h2>Enter a city below 👇</h2>
                <input
                  type='text'
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='mapElement'>
            <Map city={city} setCity={setCity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
