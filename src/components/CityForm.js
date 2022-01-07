import React, { useState, useEffect } from 'react';

function CityForm(){
    // const [name, setName] = useState("")
    // const [country, setCountry] = useState("")
    // const [image, setImage] = useState("")
    // const [summary, setSummary] = useState("")
    // const [content, setContent] = useState("")

    const [city, setCity] = useState({})
    const [cityList, setCityList] = useState([])

    function handleChange(e){
        setCity({
            ...city,
            [e.target.name]: e.target.value
        })
        console.log(city)
    }
    
    function addToList(e){
        e.preventDefault()

        setCityList(prevList => [...prevList, city])
         console.log(cityList)

    }

    return(
        <div id="city-form">
            <form onSubmit={addToList}>
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