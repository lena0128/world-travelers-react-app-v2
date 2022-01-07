import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCities } from '../actions/cityActions';
import CityCard from './CityCard';
import CityFilter from './CityFilter';

function CityList() {
    const cities = useSelector(state => state.cities)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const [searchTerm, setSearch] = useState("")

    const displayCities = cities.map((city, id) => <CityCard 
    key={id}
    id={city.id} 
    name={city.name}
    country={city.country} 
    image={city.image}
    />)


    useEffect(() => {
          console.log("mounting cities")
          dispatch(fecthCities())

          // componentWillUnmount
          return () => {
              console.log("unmounting cities")
          }
    }, [dispatch]) 

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const searchResult = cities.find((city) => city.name.toLowerCase() === searchTerm.toLowerCase())

    return(
        <div className="city-list">
            <CityFilter searchTerm={searchTerm} city={searchResult} handleSearch={handleSearch} />
            <h3>all cities</h3>
            {loading ? <h1>Data loading...</h1> : displayCities }
        </div>
    )

}

export default CityList