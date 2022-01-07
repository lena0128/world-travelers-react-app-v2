import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { createCity } from '../actions/cityActions';
import { Form, Button, Container } from 'react-bootstrap';


function NewCityForm(){
    // define a local state
    const initCity = {
        name: "",
        country: "",
        image: "",
        summary: "",
        content: ""
    }

    const [city, setCity] = useState(initCity)
    
    const dispatch = useDispatch()

    function handleChange(e){
        setCity({
            ...city,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()

        if (city.name && city.country && city.summary) {
           dispatch(createCity(city))
        }
    }

    return(
        <Container className="city-form">
            <Form onSubmit={handleSubmit}>
            <h3>Add a New City</h3>
                    <Form.Group className="mb-2" controlId="formBasicName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text" id="name" name="name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicCountry">
                        <Form.Label>Country: </Form.Label>
                        <Form.Control type="text" id="country" name="country" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicImage">
                        <Form.Label>Image: </Form.Label>
                        <Form.Control type="text" id="image" name="image" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicSummary">
                        <Form.Label>Summary: </Form.Label>
                        <Form.Control type="text" id="summary" name="summary" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicContent">
                        <Form.Label>Content: </Form.Label>
                        <Form.Control type="text" id="content" name="content" onChange={handleChange} />
                    </Form.Group>
                                        

                    <Button variant="success" type="submit">Submit</Button>
            </Form>
        </Container>
    )

}

export default NewCityForm
