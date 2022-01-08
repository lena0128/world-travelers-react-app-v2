import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { createCity } from '../actions/cityActions';
import { Form, Button, Container } from 'react-bootstrap';



function NewCityForm(props){
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

        props.goBack()
    }

    return(
        <Container className="city-form">
            <Form onSubmit={handleSubmit}>
            <h3>Add a New City</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control size="sm" type="text" name="name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country: </Form.Label>
                        <Form.Control type="text" name="country" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image: </Form.Label>
                        <Form.Control type="text" name="image" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSummary">
                        <Form.Label>Summary: </Form.Label>
                        <Form.Control type="text" name="summary" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content: </Form.Label>
                        <Form.Control as="textarea" rows={3} name="content" onChange={handleChange} />
                    </Form.Group>
                                        

                    <Button variant="success" type="submit">Submit</Button>
            <hr />
            </Form>

            <div><Button variant="success" type="submit" onClick={props.goBack}>GO BACK</Button></div>
            
        </Container>
    )

}

export default NewCityForm
