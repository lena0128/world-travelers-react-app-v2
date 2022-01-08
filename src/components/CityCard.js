import React from 'react'; 
import { Link } from "react-router-dom";

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
            <div key={id} className="city-card">
            <img src={city.image} alt={city.name} />
            <p>{city.name}, {city.country}</p>
                <Link to={`/cities/${city.id}`} key={city.id}>
                  Read More
                </Link>
         </div>
        ) 
    })
    
    return(
        props.foundCities.length === 0 ? citiesJSX : foundCitiesJSX
    )
}

export default CityCard;