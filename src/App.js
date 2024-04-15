import './App.css';
import {citiesData} from './constants/cityTemperatures'

function App() {
  return (
    <div>
      <ul>
      {citiesData.map((c)=>
      <p key={c.city}>{c.city} - {c.temperature} </p>)}
      </ul>
    </div>
  );
}

export default App;
