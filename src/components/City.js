import React, {useState} from "react";
import {Row, Col, FormControl, Button} from "react-bootstrap";

const City = () => {
  const [city, setCity] = useState("");
  return (
    <>
      {/* heading */}
      <Row>
        <Col>
          <h1>Search City</h1>
        </Col>
      </Row>
      {/* search form */}
      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter City"
            //update the city basedon the users input : second parameter in line 5
            onChange={(event) => 
              setCity(event.target.value)}
            //value of the selected city : first parameter line 5
            value={city}
          />
        </Col>
      </Row>
      {/* button */}
      <Row>
        <Col>
          <Button onClick={onsearch} >Check Weather</Button>
        </Col>
      </Row>
      
  </>
  
  );
};

export default City;
