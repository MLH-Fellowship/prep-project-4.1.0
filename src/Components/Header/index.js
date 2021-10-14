import Map from '../map/map';
import './header.css';
import { useEffect, useState } from 'react';
const Header = ({ city, setCity }) => {
  const [included, setIncluded] = useState(false);
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
              <h2>Enter a city below 👇</h2>
              <input
                type='text'
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <div className='favo'>
                {included ? (
                  <i className='fas fa-bookmark'></i>
                ) : (
                  <i className='far fa-bookmark'></i>
                )}
                <span
                  onClick={() => {
                    let bookMarkarray = localStorage.getItem('bookMarks');
                    if (bookMarkarray === null) bookMarkarray = [];
                    else bookMarkarray = JSON.parse(bookMarkarray);
                    if (!bookMarkarray.includes(city)) {
                      bookMarkarray.push(capitalizeFirstLetter(city));
                    }

                    localStorage.setItem(
                      'bookMarks',
                      JSON.stringify(bookMarkarray)
                    );
                    setIncluded(true);
                  }}
                >
                  Bookmark
                </span>
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
