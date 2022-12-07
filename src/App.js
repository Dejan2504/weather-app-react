import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { WeatherContext } from './store/WeatherContext';



function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherdata] = useState({});
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      
    });
  
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=588a021975c1e569b550f8352fe723f5`).then((response) => {
    //   console.log("Response" + response);  
    // return response.json();
    // }).then((data) => {
    //   console.log("data " + data);
    //   setWeatherdata(data);
    // }).catch((err) => {
    //   console.log(err);
    // });
  })

  

  return (
    <div className="App">
    <WeatherContext.Provider value={{latitude, longitude, weatherData}}>
    </WeatherContext.Provider>
    </div>
  );
}

export default App;
