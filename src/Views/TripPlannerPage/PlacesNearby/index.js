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
    if (
      this.props.results != null &&
      this.props.results != undefined &&
      this.props.results.length > 0
    ) {
      console.log("Results");
      console.log(this.props.results);
      const lat = this.props.results[1].coord.lat;
      const lng = this.props.results[1].coord.lon;

      const url = `https://cryptic-oasis-82460.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=10000&type=restaurant&key=${process.env.REACT_APP_GMAPSAPI}`;
      fetch(url, {
        method: "GET",
        headers: {},
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          var formated_data_RESTURANTS = [];
          for (var i = 0; i < 3; i++) {
            formated_data_RESTURANTS.push({
              name: data["results"][i]["name"],
              vicinity: data["results"][i]["vicinity"],
              rating: data["results"][i]["rating"],
            });
          }
          console.log(formated_data_RESTURANTS);
          this.setState({
            restaurantsNearby: formated_data_RESTURANTS,
            loading: false,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  getLodgingNearby() {
    this.setState({ loading: true });
    if (
      this.props.results != null &&
      this.props.results != undefined &&
      this.props.results.length > 0
    ) {
      console.log("Results");
      console.log(this.props.results);
      const lat = this.props.results[1].coord.lat;
      const lng = this.props.results[1].coord.lon;

      const url = `https://cryptic-oasis-82460.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=10000&type=lodging&key=${process.env.REACT_APP_GMAPSAPI}`;
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
          console.log(formated_data_LODGES);
          this.setState({
            lodgingNearby: formated_data_LODGES,
            loading: false,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="places-nearby">
        {!this.loading && (
          <Carrousel
            places={this.state.restaurantsNearby}
            loading={this.state.loading}
          />
        )}
        {!this.loading && (
          <Carrousel
            places={this.state.lodgingNearby}
            loading={this.state.loading}
          />
        )}
      </div>
    );
  }
}
