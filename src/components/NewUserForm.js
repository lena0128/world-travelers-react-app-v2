import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function NewUserForm() {

    const initUser = {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    const [user, setUser] = useState(initUser) 

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(user)
    }

   return(
    <Container className="user-form">
            <Form onSubmit={handleSubmit}>
            <h3>Create A New Account</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control size="sm" type="text" name="username" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                        <Form.Label>Comfirm Password: </Form.Label>
                        <Form.Control type="password" name="password_confirmation" onChange={handleChange} />
                    </Form.Group>
                                        

                    <Button variant="success" type="submit">Create</Button>
            <hr />
            </Form>
            
        </Container>
    )

}

export default NewUserForm