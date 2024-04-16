import "./App.css";
import { citiesData } from "./constants/cityTemperatures";
import { CityTemperature } from "./components/CityTemperature";


function App() {
  const data = citiesData;

  return (
    <div>
      <ul>
        {data.map((cityData, index) => (
          <CityTemperature
            key={index}
            city={cityData.city}
            initialTemperature={cityData.temperature}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
