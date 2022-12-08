import React from 'react';

const WeatherCard = function({weatherData}) {
  const icon = weatherData.weather[0].icon;

  return(
    <div>  
    <h1>{weatherData.name}</h1>
    <span>{Math.round(weatherData.main.temp - 272.15) + '℃'}</span><span><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'></img></span>
        <div>Feels like: {Math.round(weatherData.main.feels_like - 272.15) + '℃'}</div>
        <div>Max temperature: {Math.round(weatherData.main.temp_max - 272.15) + '℃'}</div>
        <div>Min temperature: {Math.round(weatherData.main.temp_min - 272.15) + '℃'}</div>
        <div>Pressure: {weatherData.main.pressure + 'hPa'}</div>
        <div>Humidity: {weatherData.main.humidity + '%'}</div>
    </div>
    );
};

export default WeatherCard;