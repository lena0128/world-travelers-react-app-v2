import React from 'react'; 
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';

function CityCard(props) {

    const citiesJSX = props.cities.map((city, id) => {
        return (
            <div key={id} className="city-card">
            <img src={city.image} alt={city.name} />
            <p>{city.name}, {city.country}</p>
                <Link to={`/cities/${city.id}`} key={city.id}>
                  Read More
                </Link>
            </div>
        ) 
    })


    const foundCitiesJSX = props.foundCities.map((city, id) => {
        return (
            <div key={city.id} className="city-card">
                <img src={city.image} alt={city.name} />
                <p>{city.name}, {city.country}</p>
                    <Link to={`/cities/${city.id}`} key={city.id}>
                      Read More
                    </Link>
            </div>

        ) 
    })
        

    function checkSearchResult() {
        if (props.searchTerm.length > 3 && props.foundCities.length === 0) {
            return <h5>No Result Found...</h5>
        } else if (props.foundCities.length >= 1) {
            return foundCitiesJSX
        }
    }

    
    return(
        <div>
        {checkSearchResult()}
        <hr />
        <div>
          <h3>All Destinations</h3>
          {citiesJSX}
        </div>
        </div>
    )
}

export default CityCard;