import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class SearchBox2 extends Component {
  data = [
    {
      key: 'New Delhi',
      value: 'New Delhi',
    },
    {
      key: 'Mumbai',
      value: 'Mumbai',
    },
    {
      key: '',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  city = "New york city"

  // onChange Function
  autoCompleteCity(query) {
    console.log(query)
  }

  // onChange -> autocompleteFucntion -> AC_API -> top <=5 results -> update data variable
  // onSelect/SearchweatherCity -> CIty name in openweatherapi -> returns the data

  render() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Mumbai"
        data={this.data}

        onChange={record => this.autoCompleteCity(record)}
        // searchCityWeather
        onSelect={finalCity => console.log("finalCity",finalCity)}
    
        styles={{
            headerTitle: { color: "red" },
            listItem: { color: "black" },
          }}
      />
    )
  }
}