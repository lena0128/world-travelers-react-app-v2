import React from 'react'; 

function CityCard(props) {
    
    return(
        <div className="city-card">
           <img src={props.image} alt={props.name} />
           <h3>{props.name}, {props.country}</h3>
        </div>
    )
}

export default CityCard;