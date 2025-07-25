import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div className="weather-card">
      <h2 style={{color: "black"}}>{location.name}, {location.country}</h2>
      <h3>{current.temp_c}°C</h3>
      <img src={current.condition.icon} alt={current.condition.text} />
      <p>{current.condition.text}</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind: {current.wind_kph} kph</p>
    </div>
  );
}

export default WeatherCard;
