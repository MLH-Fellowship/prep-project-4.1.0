import Map from '../map/map';
import './header.css';
const Header = ({ city, setCity }) => {
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
              <div class='favo'>
                <i class='far fa-bookmark'></i>
                <span
                  onClick={() => {
                    let bookMarkarray = localStorage.getItem('bookMarks');
                    if (bookMarkarray === null) bookMarkarray = [];
                    else bookMarkarray = JSON.parse(bookMarkarray);
                    if (!bookMarkarray.includes(city)) bookMarkarray.push(city);

                    localStorage.setItem(
                      'bookMarks',
                      JSON.stringify(bookMarkarray)
                    );
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
