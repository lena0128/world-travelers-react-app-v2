import React from 'react'; 

function CityCard(props) {
    
    return(
        <div className="city-card">
           <img src={props.image} alt={props.name} />
           <p>{props.name}, {props.country}</p>
        </div>
    )
}

export default CityCard;