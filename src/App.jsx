import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'd77c4d110ff14347b6a165439252307';

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.error('API Error:', err.response?.data || err.message);
      setError('City not found or API error');
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
