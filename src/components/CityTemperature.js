import React, { useState } from "react";
import CustomButton from "./CustomButton";

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
    <div>
      <p>
        {city} -
        <CustomButton onSelect={decreaseTemperature} title={"-"}></CustomButton>
        {temperature} {unit}
        <CustomButton onSelect={increaseTemperature} title={"+"}></CustomButton> 
        <CustomButton onSelect={temperatureUnit} title={`Show in ${unit === "C" ? "Fahrenheit" : "Celsius"}`}>
        </CustomButton>
      </p>
    </div>
  );
};
