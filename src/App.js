import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { WeatherContext } from './store/WeatherContext';
import axios from 'axios';



function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherdata] = useState({});
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
      getWeatherData(latitude, longitude);
  },[])

  const getWeatherData = function(latitude, longitude){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=588a021975c1e569b550f8352fe723f5`).then((response) => {
      console.log(response.data);
      setWeatherdata(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }

  

  return (
    <div className="App">
    <WeatherContext.Provider value={{latitude, longitude, weatherData}}>
    <WeatherCard />
    </WeatherContext.Provider>
    </div>
  );
}

export default App;
