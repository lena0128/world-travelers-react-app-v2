import React from 'react';
import { Container } from 'react-bootstrap';
import NewUserForm from '../components/NewUserForm'

function UserContainer() {

    return(
        <Container id="user-container">
            <NewUserForm />

        </Container>
    )

}

export default UserContainer