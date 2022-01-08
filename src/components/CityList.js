import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCities } from '../actions/cityActions';
import CityCard from './CityCard';
import CityFilter from './CityFilter';
import { Container } from 'react-bootstrap';
// import { Switch, Route } from 'react-router-dom';
// import CityPage from './CityPage';

function CityList() {
    const cities = useSelector(state => state.cities)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()


    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
          console.log("mounting cities")
          dispatch(fecthCities())

          // cleanup function
          return () => {
              console.log("unmounting cities")
          }
    }, [dispatch]) 

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }


    const foundCities = cities.filter((city) => city.country.toLowerCase() === searchTerm.toLowerCase())
    // console.log(foundCity)


    return(
        <Container className="city-list">
                    
                    <CityFilter searchTerm={searchTerm} handleSearch={handleSearch} />

                    {loading ? <h1>Data loading...</h1> : <CityCard cities={cities} foundCities={foundCities}/> }
                  
        </Container>
    )

}

export default CityList
