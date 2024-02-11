
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  console.log(weather,"weather")
  return (
    <div className="p-4">
    {weather && <> <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p></> }
    </div>
  );
};

export default WeatherDisplay;
