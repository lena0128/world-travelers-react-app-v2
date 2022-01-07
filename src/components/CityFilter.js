import React from 'react';
import CityCard from './CityCard';

function CityFilter(props){

    return(
        <>
        <div id="city-filter">
           <input type="text" placeholder="Search for a city..." onChange={props.handleSearch} />
        </div>

        <div>
            { props.city ?
               <CityCard 
               name={props.city.name}
               country={props.city.country} 
               image={props.city.image}
               />  : "" }
        </div>
        <hr />
        </>
    )
}

export default CityFilter