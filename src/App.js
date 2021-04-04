import './App.css';
import WeatherCard from '../src/components/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard 
              dt={1602104400 * 1000}
              temp_min="22.67"
              temp_max="24.39"
              main="Clear"
              humidity="Humid"
              icon="11d"/>
    </div>
  );
}

export default App;
