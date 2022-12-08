import React from 'react';

const WeatherCard = function({weatherData}) {
  const icon = weatherData.weather[0].icon;
  console.log(icon);

  return(
    <div>  
    <h1>{weatherData.name}</h1>
    <span>{weatherData.main.temp}</span><span><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img></span>
        <div>Feels like: {weatherData.main.feels_like}</div>
        <div>Max temperature: {weatherData.main.temp_max}</div>
        <div>Min temperature: {weatherData.main.temp_min}</div>
        <div>Pressure: {weatherData.main.pressure}</div>
        <div>Humidity: {weatherData.main.humidity}</div>
    </div>
    );
};

export default WeatherCard;