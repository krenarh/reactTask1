import { useState } from "react";
import "./App.css";
import { citiesData } from "./constants/cityTemperatures";
import CustomButton from "./components/CustomButton";

function App() {
  const [cityTemperature, setCityTemperature] = useState(citiesData);
  function handleTChange(index, change) {
    const updatedTemperatures = [...cityTemperature];
    updatedTemperatures[index].temperature += change;
    setCityTemperature(updatedTemperatures);
  }
  return (
    <div>
      <ul>
        {citiesData.map((c, index) => (
          <div key={index}>
          <p>
            {c.city} -  <CustomButton title="-" onSelect={() => handleTChange(index, -1)} />  {c.temperature} <CustomButton title="+" onSelect={() => handleTChange(index, 1)} />
          </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
