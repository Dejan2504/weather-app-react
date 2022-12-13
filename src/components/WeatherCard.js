import React from 'react';

import classes from './WeatherCard.module.css';

const WeatherCard = function({weatherData}) {
  console.log(weatherData);
  const icon = weatherData.weather[0].icon;

  return(
    <div className={classes.cardDiv}>  
    <h1>{weatherData.name}</h1>
    <div className={classes.imgContainer}><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'></img></div>
    <div className={classes.temperature}>{Math.round(weatherData.main.temp - 272.15) + '℃'}</div>
    <div className={classes.description}>{weatherData.weather[0].description}</div>
    <hr></hr>
    <div className={classes.bottom}>
        <div className={classes.feelLike}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g id="_42.thermometer" data-name="42.thermometer">
                <path d="M36.11,39.44V10.74a6.71,6.71,0,0,0-13.41,0v28.7C13.88,45.73,18.56,60.06,29.41,60,40.25,60.06,44.94,45.73,36.11,39.44ZM29.41,58c-9.18.07-12.86-12.21-5.15-17.19a1.15,1.15,0,0,0,.44-.84V10.74a4.71,4.71,0,0,1,9.41,0V39.93a1.22,1.22,0,0,0,.45.84C42.26,45.74,38.58,58,29.41,58Z"/>
                <path d="M45,34.63h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,34.63Z"/>
                <path d="M45,30.48h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,30.48Z"/>
                <path d="M45,26.33h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,26.33Z"/>
                <path d="M45,22.19h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,22.19Z"/>
                <path d="M45,18h-5.7a1,1,0,0,0,0,2H45A1,1,0,0,0,45,18Z"/>
                <path d="M39.26,15.89H45a1,1,0,0,0,0-2h-5.7A1,1,0,0,0,39.26,15.89Z"/>
                <path d="M30.41,41.45V12.3a1,1,0,0,0-2,0V41.45c-8.78,1.42-7.95,14.14,1,14.36C38.36,55.59,39.19,42.87,30.41,41.45Zm-1,12.36c-6.9-.22-6.9-10.22,0-10.44C36.31,43.59,36.31,53.6,29.41,53.81Z"/>
              </g>
            </svg>
          </div>
          <div>
            Feels like<br /> {Math.round(weatherData.main.feels_like - 272.15) + '℃'}
          </div>
        </div>
        <div className={classes.pressure}>
        <div>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M32,37A17,17,0,1,1,49,20,17,17,0,0,1,32,37ZM32,5A15,15,0,1,0,47,20,15,15,0,0,0,32,5Z"/>
            <path d="M28,51a1,1,0,0,1-.95-.7c-.39-1.24-1.56-6.45-3.47-15.49l-.11-.49A64.56,64.56,0,0,1,24,5.38,1,1,0,1,1,26,5.86a62.61,62.61,0,0,0-.52,28l.1.5C27.9,45.58,28.7,48.89,29,49.7A1,1,0,0,1,28.3,51,.79.79,0,0,1,28,51Z"/>
            <path d="M36,51a.79.79,0,0,1-.3,0,1,1,0,0,1-.65-1.25c.25-.81,1.05-4.12,3.42-15.3l.1-.5a62.61,62.61,0,0,0-.52-28A1,1,0,0,1,40,5.38a64.56,64.56,0,0,1,.54,28.94l-.11.49c-1.91,9-3.08,14.25-3.47,15.49A1,1,0,0,1,36,51Z"/>
            <path d="M38,61H26a3,3,0,0,1-3-3V50a1,1,0,0,1,1-1H40a1,1,0,0,1,1,1v8A3,3,0,0,1,38,61ZM25,51v7a1,1,0,0,0,1,1H38a1,1,0,0,0,1-1V51Z"/>
            <path d="M32,51a1,1,0,0,1-1-1V36a1,1,0,0,1,2,0V50A1,1,0,0,1,32,51Z"/>
          </svg>
        </div>
      <div>
        Pressure<br /> {weatherData.main.pressure + 'hPa'}
      </div>
        </div>
        <div className={classes.humidity}>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            Humidity<br /> {weatherData.main.humidity + '%'}
          </div>
        </div>
      </div>
    </div>
    );
};

export default WeatherCard;