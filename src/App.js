
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import RecentSearches from './components/RecentSearches';
import StateGraph from './components/StateGraph';

function App() {
  const [weather, setWeather] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const searchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fb02874a95e8eb024ad1ebbbcb700d8&units=metric`
      );
      const data = await response.json();
      console.log(data,'data')
      setWeather(data);
      updateRecentSearches(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      
    }
  };

  const updateRecentSearches = (city) => {
    setRecentSearches(prevSearches => {
      if (!prevSearches.includes(city)) {
        const newSearches = [city, ...prevSearches.slice(0, 4)];
        return newSearches;
      }
      return prevSearches;
    });
  };

  return (
    <Router>
      <div>
        <Header />
        <SearchBar onSearch={searchWeather} />
        <Routes>
          <Route path="/" element={<WeatherDisplay weather={weather} />} />
          <Route path="/" element={<RecentSearches searches={recentSearches} />} />
          <Route path="/state/:id" element={<StateGraph stateId={2}/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
