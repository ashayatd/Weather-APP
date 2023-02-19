import React from 'react';

function WeatherPanel({ weather }) {
  return (
    <div className="weather-panel">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}

export default WeatherPanel;
