import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import "./searchbox.css";

export default class SearchBox2 extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCity: this.props.city,
    };

    this.autoCompleteCity = this.autoCompleteCity.bind(this);
  }

  // onChange Function
  autoCompleteCity(city) {
    const autocompleteURL =
      "https://autocomplete.search.hereapi.com/v1/autocomplete?";

    if (city !== "") {
      // Calling the autocomplete API with max 6 results, looking for cities and using the API Key
      var query = `q=${city}&limit=6&types=city&apiKey=${process.env.REACT_APP_HEREAPI}`;
      fetch(`${autocompleteURL}${query}`)
        .then((res) => res.json())
        .then((result) => {
          // Here are the 0 - 6 results from the API given any input

          const set = result.items.map((item) => item.address.city);
          const uniqueCities = [...new Set(set)];

          var filterdCities = uniqueCities.filter(function (x) {
            return x !== undefined;
          });
          let newdata = [];
          filterdCities.forEach((city) => {
            newdata.push({ key: city, value: city });
          });

          this.setState({ data: newdata });
        });
    }
  }

  // onChange -> autocompleteFucntion -> AC_API -> top <=5 results -> update data variable
  // onSelect/SearchweatherCity -> CIty name in openweatherapi -> returns the data

  render() {
    return (
      <ReactSearchBox
        id="searchbox"
        placeholder={this.state.selectedCity}
        value="New York City"
        data={this.state.data}
        onChange={(record) => this.autoCompleteCity(record)}
        onSelect={(finalCity) => console.log("finalCity", finalCity)}
      />
    );
  }
}
