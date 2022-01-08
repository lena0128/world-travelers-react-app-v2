import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCities } from '../actions/cityActions';
import CityCard from '../components/CityCard';
import CityFilter from '../components/CityFilter';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import CityPage from '../components/CityPage';
import NewCityForm from '../components/NewCityForm';

function CityContainer() {
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
          <Switch>

            <Route exact path="/cities/new" component={(routeInfo) => {
                return <NewCityForm goBack={() => routeInfo.history.push("/cities")} />
            }} />

            <Route exact path="/ cities">
                <CityFilter searchTerm={searchTerm} handleSearch={handleSearch} />

                {loading ? <h1>Data loading...</h1> : <CityCard cities={cities} foundCities={foundCities}/> } 
            </Route> 
            
          </Switch>       
                  
        </Container>
    )

}

export default CityContainer
