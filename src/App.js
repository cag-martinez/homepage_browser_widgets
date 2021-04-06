import React from 'react';
import "./App.css";
import City from "./components/City";
import { Container } from "react-bootstrap";
import Fetch from "./hooks/Fetch";
import {API_BASE_URL, API_KEY} from "./apis/config";
import List from './components/List'


const App = () => {
  // return values destructured from Fetch.js
  const { data, error, isLoading, setUrl } = Fetch();
  console.log(setUrl)

  return (
    <Container className="App">
      <City
        onSearch={(city) =>
          setUrl(`${API_BASE_URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        }
      />
      {/* conditional render */}
      {data && <List displayWeather={data.list}/>}
    </Container>
  );
};

export default App;
