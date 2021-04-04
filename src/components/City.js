import React, { useState } from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const City = () => {
    const [searchCity, setCity] = useState ('');
    return <div>
            {/* heading */}
        <Row>
            <col>
                <h1>Search City</h1>
            </col>
        </Row>
            {/* search form */}
        <Row>
        <Col xs={4} className="text-center">
            <FormControl
            placeholder="Enter City"
            //update the city basedon the users input : second parameter in line 5
            onChanage={(event) => {setCity(event.target.value)}}
            //value of the selected city : first parameter line 5
            value = {searchCity} />
            </Col>
        </Row>
            {/* button */}
        <Row>
            <Col>
                <Button onClick={onSearch}> Check Weather </Button>
            </Col>
        </Row>
    </div>
}

export default City;