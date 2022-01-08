import React from 'react';

function CityFilter(props){
   
    return(
        <>
        <div id="city-filter">
            <br />
           <input type="text" placeholder="Search for a city..." onChange={props.handleSearch } />
        </div> 

        <hr />
      </>
    )
}

export default CityFilter