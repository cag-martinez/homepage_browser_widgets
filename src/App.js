import './App.css';
//import WeatherCard from '../src/components/WeatherCard';

import City from './components/City';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      {/* <WeatherCard 
              dt={1602104400 * 1000}
              temp_min="22.67"
              temp_max="24.39"
              main="Clear"
              humidity="Humid"
              icon="11d"/> */}
              <City />
    </Container>
  );
}

export default App;
