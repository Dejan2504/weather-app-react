import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';


function App() {
  const [weatherData, setWeatherdata] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=588a021975c1e569b550f8352fe723f5`).then((response) => {
      return response.json()
    }).then((data) => {
      setWeatherdata(data);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
    })
  },[])
  return (
    <div className="App">
    {isLoading ? <LoadingSpinner /> : <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
