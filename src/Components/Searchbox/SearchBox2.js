import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

export default class SearchBox2 extends Component {
  data = [
    {
      key: "New Delhi",
      value: "New Delhi",
    },
    {
      key: "Mumbai",
      value: "Mumbai",
    },
    {
      key: "",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  city = "New york city";

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
          console.log(filterdCities);
        });
    }
  }

  // onChange -> autocompleteFucntion -> AC_API -> top <=5 results -> update data variable
  // onSelect/SearchweatherCity -> CIty name in openweatherapi -> returns the data

  render() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Mumbai"
        data={this.data}
        onChange={(record) => this.autoCompleteCity(record)}
        // searchCityWeather
        onSelect={(finalCity) => console.log("finalCity", finalCity)}
        styles={{
          headerTitle: { color: "red" },
          listItem: { color: "black" },
        }}
      />
    );
  }
}
