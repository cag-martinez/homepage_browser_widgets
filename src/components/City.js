import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";


const City = () => {
  const [city, setCity] = useState("");
  // function to fetch data from the API
//   const onSearch = () => {
//     fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
//       .then((response) => response.json())
//       .then((result) => console.log(result));
//   };

  /* on key down event when user presses enter */
  // const onKeyDown = (event) => {
  //   if (event.keyCode === 13) {
  //     onSearch();
  //   }
  // };

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
            // key down event for enter key
            // onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      {/* button */}
      <Row>
        <Col>
          <Button onClick={onSearch}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default City;
