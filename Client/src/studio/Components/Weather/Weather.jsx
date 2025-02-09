import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./Weather.module.css";

const Weather = () => {
  const [unit, setUnit] = useState("C");
  const [city, setCity] = useState("Kerala");
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);

  // Fetch weather data
  useEffect(() => {
    const apiKey = '9635c2f887704101bab63730250902'; // Your API key
    const getWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();
        setWeather(data.current.condition.text);
        setTemperature(data.current.temp_c);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeatherData();
  }, [city]);

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
    setTemperature((prevTemp) => 
      unit === "C" 
        ? Math.round(prevTemp * 1.8 + 32) 
        : Math.round((prevTemp - 32) / 1.8)
    );
  };

  return (
    <motion.div 
      className={style.weather__container} 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={style.units__toggle}>
        <button onClick={toggleUnit} className={unit === "C" ? style.active : ""}>C</button>
        <button onClick={toggleUnit} className={unit === "F" ? style.active : ""}>F</button>
      </div>
      <motion.div 
        className={style.weather__icon} 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" fill="yellow" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </motion.div>
      <div className={style.box1}>
        <div className={style.location__name}>{city}</div>
        <div className={style.weather__condition}>{weather || 'Loading...'}</div>
        <div className={style.current__temperature}>{temperature !== null ? `${temperature}°${unit}` : 'Loading...'}</div>
      </div>
      <div className={style.search__input}>
        <input 
          type="text" 
          className={style.city} 
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </motion.div>
  );
};

export default Weather;
