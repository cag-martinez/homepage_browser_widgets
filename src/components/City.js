import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";


const City = ({onSearch}) => {
  const [city, setCity] = useState("");

  return (
    <>
      {/* heading */}
      <Row>
        <Col>
          <h1>Weather in your City</h1>
        </Col>
      </Row>
      {/* search form */}
      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter City"
            //update the city basedon the users input : second parameter in line 5
            onChange={(event) => setCity(event.target.value)}
            //value of the selected city : first parameter line 5
            value={city}
          />
        </Col>
      </Row>
      {/* button */}
      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default City;
