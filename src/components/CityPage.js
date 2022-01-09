import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CityPage = (props) => {
    console.log(props.city)
    return(
        <Container id="city-page">
            <h1>{props.city.name}, {props.city.country}</h1>
            <img src={props.city.image} alt={props.city.name} />
            <aside className="pquote">
               <blockquote>
                   <p>{props.city.summary}</p>
               </blockquote>
             </aside>
                 <p>{props.city.content}</p>
                 <div><Button variant="success" type="submit" onClick={props.goBack}>GO BACK</Button></div>
                 <br />
        </Container>
    )
}

export default CityPage