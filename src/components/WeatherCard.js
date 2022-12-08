import React, { useContext } from 'react';
import { WeatherContext } from '../store/WeatherContext';

const WeatherCard = function() {
  const {latitude, longitude, weatherData} = useContext(WeatherContext);
  // const icon = weatherData.weather;

  // <span>{weatherData.temp - 273.15}℃</span><span>{`http://openweathermap.org/img/wn/${icon}@2x.png`}</span>
    // console.log(weatherData);
    // return(
    //   <div>  
    //     <h1>{weatherData.name}</h1>
    //     <h3>latitude: {latitude} longitude: {longitude}</h3>
        
    //     <div>Feels like: {weatherData.main.feels_like}</div>
    //     <div>Max temperature: {weatherData.main.temp_max}</div>
    //     <div>Min temperature: {weatherData.main.temp_min}</div>
    //     <div>Pressure: {weatherData.main.pressure}</div>
    //     <div>Humidity: {weatherData.main.humidity}</div>
    // </div>
    // );
};

export default WeatherCard;