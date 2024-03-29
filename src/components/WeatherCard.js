import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ dt, temp, temp_min, temp_max, main, icon }) => {
  // creating a date object
  const date = new Date(dt);
  return (
    <Card style={{ width: "10rem", height: "450px", padding: "1px", border: "solid .5px", backgroundColor: "gray", borderRadius: "30px"}}>
      <Card.Img
        variant="top"
        // passing icon prop for icon code
        // note that Im using back ticks inside curly braces and pasing the prop using JQuery
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <Card.Text>
          <p> {date.toDateString()}</p>
          <p>Currently: {temp}</p>
          <p> Min: {temp_min}</p>
          <p> Max: {temp_max}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
