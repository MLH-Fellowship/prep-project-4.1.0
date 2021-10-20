import React from "react";
import "./placesNearby.css";
import axios from "axios";
import Carrousel from "./carrousel";

export default class PlacesNearby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsNearby: [],
      lodgingNearby: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getRestaurantsNearby();
    this.getLodgingNearby();
  }

  // reference Link : https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  // https://cors-anywhere.herokuapp.com/corsdemo

  getRestaurantsNearby() {
    this.setState({ loading: true });
    // const { lat, lng } = this.props;
    const lat = 18.6517;
    const lng = 73.7684;

    const url = `https://cryptic-oasis-82460.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&type=restaurant|food&key=${process.env.REACT_APP_GMAPSAPI}`;
    fetch(url, {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        var formated_data_RESTURANTS = [];
        for (var i = 0; i < 3; i++) {
          formated_data_RESTURANTS.push({
            name: data["results"][i]["name"],
            vicinity: data["results"][i]["vicinity"],
            rating: data["results"][i]["rating"],
          });
        }
        this.setState({
          restaurantsNearby: formated_data_RESTURANTS,
          loading: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getLodgingNearby() {
    this.setState({ loading: true });
    // const { lat, lng } = this.props;
    const lat = 18.6517;
    const lng = 73.7684;

    const url = `https://cryptic-oasis-82460.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&type=lodging&key=${process.env.REACT_APP_GMAPSAPI}`;
    fetch(url, {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        var formated_data_LODGES = [];
        for (var i = 0; i < 3; i++) {
          formated_data_LODGES.push({
            name: data["results"][i]["name"],
            vicinity: data["results"][i]["vicinity"],
            rating: data["results"][i]["rating"],
          });
        }
        this.setState({
          lodgingNearby: formated_data_LODGES,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // if (!this.state.loading) {
    //   console.log("RESTURANTS RENDER: ", this.state.restaurantsNearby);
    //   console.log("LODGES RENDER: ", this.state.lodgingNearby);
    // }

    const { restaurantsNearby, lodgingNearby, loading } = this.state;
    return (
      <div className="places-nearby">
        {!loading && <Carrousel placesNearby={restaurantsNearby} />}
      </div>
    );
  }
}
