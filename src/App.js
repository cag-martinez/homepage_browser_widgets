import React from 'react';
import "./App.css";
import City from "./components/City";
import { Container } from "react-bootstrap";
import Fetch from "./hooks/Fetch";
import { API_BASE_URL, API_KEY } from "./apis/config";


const App = () => {
  // return values destructured from Fetch.js
  const { data, error, isLoading, setUrl } = Fetch();

  return (
    <Container className="App">
      <City
        onSearch={(city) =>
          setUrl(
            `${API_BASE_URL}data/2.5/forecast?${city}&appid=${API_KEY}&units=imperial`
          )
        }
      />
    </Container>
  );
};

export default App;
