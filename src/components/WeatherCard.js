import React from "react";
import {Card} from "react-bootstrap";

const WeatherCard = ({ dt, temp, temp_min, temp_max, humidity, main, icon }) => {
  // creating a date object
  const date = new Date(dt);
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img
        variant="top"
        // passing icon prop for icon code
        // note that Im using back ticks inside curly braces and pasing the prop using JQuery
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <Card.Text>
          <p>Currently: {temp}</p>
            <p> Min: {temp_min}</p>
            <p> Max: {temp_max}</p>
            <p> humidity: {humidity}</p>

        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
