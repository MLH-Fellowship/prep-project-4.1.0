import React from "react";
import "./placesNearby.css";
import axios from "axios";

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

  // reference Link : https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  // https://cors-anywhere.herokuapp.com/corsdemo

  getPlacesNearby() {
    this.setState({ loading: true });
    const { lat, lng } = this.props;
    // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=restaurant&key=${process.env.REACT_APP_GMAPSAPI}`;
    const url = `https://cryptic-oasis-82460.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.6517%2C73.7684&radius=5000&type=restaurant|food&key=${process.env.REACT_APP_GMAPSAPI}`;
    fetch(url, {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < 7; i++) {
          console.log("name: ", data["results"][i]["name"]);
          console.log("address: ", data["results"][i]["vicinity"]);
          console.log("icon: ", data["results"][i]["icon"]);
        }
        this.setState({
          placesNearby: data["results"],
          loading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { placesNearby, loading } = this.state;
    return (
      <div className="places-nearby">
        {/* {loading ? (
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
        )} */}
      </div>
    );
  }
}
