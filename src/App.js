import './App.css';
//import WeatherCard from '../src/components/WeatherCard';

import City from './components/City';
import {Container} from 'react-bootstrap';
import Fetch from '../src/hooks/Fetch';
import { API_BASE_URL, API_KEY } from "../apis/config";
import { useEffect } from 'react';

const App = () => {
// return values destructured from Fetch.js
  const {data, error, isLoading, setUrl} = Fetch();

  return (
    <Container className="App">

              <City onSearch={(city) => setUrl(`${API_BASE_URL}data/2.5/forecast?${city}&appid=${API_KEY}&units=imperial`)} />
    </Container>
  );
}

export default App;
