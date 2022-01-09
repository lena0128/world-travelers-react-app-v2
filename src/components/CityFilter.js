import React from 'react';
import { Button } from 'react-bootstrap';

function CityFilter(props){

   
    return(
        <>
        <div id="city-filter">
            <br />
           <input type="text" value={props.searchTerm} placeholder="Enter a country's name..." onChange={props.handleSearch } />
           <Button variant="success" type="submit" onClick={props.handleClearClick}>Clear</Button>
        </div> 
      </>
    )
}

export default CityFilter