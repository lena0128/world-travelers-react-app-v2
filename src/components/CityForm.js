import React, { useState, useEffect } from 'react';

function CityForm(){

    return(
        <div id="city-form">
            <form>
            <h3>Add a New City</h3>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="country">Country: </label>
                        <input type="text" id="country" name="country" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="image">Image URL: </label>
                        <input type="text" id="image" name="image" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="summary">Summary: </label>
                        <input type="text" id="summary" name="summary" onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="content">Content: </label>
                        <input type="text" id="content" name="content" onChange={handleChange} />
                    </div><br />

                    <div>
                        <input type="submit" value="Create" />
                    </div>   
            </form>
        </div>
    )

}

export default CityForm