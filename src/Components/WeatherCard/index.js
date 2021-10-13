import React from 'react'

const WeatherCard = ({day, index}) => {
    return <div key={index} style={{margin: '30px'}}>{day.humidity}</div>
}

export default WeatherCard;