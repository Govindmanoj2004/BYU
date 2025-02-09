import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Weather.module.css";

const Weather = () => {
  const [unit, setUnit] = useState("C");
  const [city, setCity] = useState("Tokyo");
  const [temperature, setTemperature] = useState(23);
  const [weather, setWeather] = useState("Clear Sky");

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
    setTemperature(unit === "C" ? Math.round(temperature * 1.8 + 32) : Math.round((temperature - 32) / 1.8));
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
        <div className={style.weather__condition}>{weather}</div>
        <div className={style.current__temperature}>{temperature}°{unit}</div>
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
