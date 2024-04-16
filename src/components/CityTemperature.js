import React, { useState } from "react";
import CustomButton from "./CustomButton";
import styles from'./cityTemperature.module.css';

export const CityTemperature = ({ city, initialTemperature }) => {
  const [temperature, setTemperature] = useState(initialTemperature);
  const [unit, setUnit] = useState("F");

  const temperatureUnit = () => {
    if (unit === "C") {
      const fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
      setTemperature(fahrenheitTemperature);
      setUnit("F");
    } else {
      const celsiusTemperature = Math.round(((temperature - 32) * 5) / 9);
      setTemperature(celsiusTemperature);
      setUnit("C");
    }
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature - 1);
  };

  const increaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature + 1);
  };
  return (
    <div className={styles.cityTemperature}>
      <p>
      <span className={styles.cityName}>{city}</span>    
        <CustomButton onSelect={decreaseTemperature} title={"-"}/>
        &nbsp;&nbsp; {temperature}° {unit}
        <div className={styles.buttons}>
        <CustomButton onSelect={increaseTemperature} title={"+"}/> 
        <div className={styles.toggleButton}>
        <CustomButton onSelect={temperatureUnit} title={`Show in ${unit === "C" ? "Fahrenheit" : "Celsius"}`}/>
        </div>
        </div>
      </p>
    </div>
  );
};
