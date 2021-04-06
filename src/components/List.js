import React from "react";
import { Row, Col } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const List = ({ displayWeather }) => {
  return (
    <Row>
      {displayWeather.map(({ dt, main, weather}) => (
        <Col key={dt}>
          <WeatherCard
            temp={main.temp}
            temp_max={main.temp_max}
            temp_min={main.temp_min}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          ></WeatherCard>
        </Col>
      ))}
    </Row>
  );
};

export default List;