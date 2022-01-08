import React from 'react';

function CityFilter(props){
   
    return(
        <>
        <div id="city-filter">
            <br />
           <input type="text" placeholder="Enter a country's name..." onChange={props.handleSearch } />
        </div> 

        <hr />
      </>
    )
}

export default CityFilter