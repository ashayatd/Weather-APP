import React, { useState, useEffect } from 'react';
import './cssfile.css';
import WeatherPanel from './WeatherPanel';

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [weather2, setweather2] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={$API_KEY}&units=metric`)
          .then(response => response.json())
          .then(data => setWeather(data))
          .catch(error => console.error(error));
      });
    }
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  function WeatherPanel({ weather }) {
    setweather2(weather);
  }

  const handleSearchClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={$API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error(error));
  }

  return (<>
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-container">
        <input type="text" placeholder="Enter a location" value={location} onChange={handleLocationChange} />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {weather ? <WeatherPanel weather={weather2} /> : null}
    </div>
    </>
  );
}

export default App;
