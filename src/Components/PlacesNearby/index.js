import React from "react";
import "./placesNearby.css";

export default class PlacesNearby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placesNearby: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getPlacesNearby();
  }

  getPlacesNearby() {
    this.setState({ loading: true });
    const { lat, lng } = this.props;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=restaurant&key=${process.env.REACT_APP_GMAPSAPI}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          placesNearby: data.results,
          loading: false,
        });
      });
  }

  render() {
    const { placesNearby, loading } = this.state;
    return (
      <div className="places-nearby">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <ul>
            {placesNearby.map((place) => (
              <li key={place.id}>
                <h3>{place.name}</h3>
                <p>{place.vicinity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
