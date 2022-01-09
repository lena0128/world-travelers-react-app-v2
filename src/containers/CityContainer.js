import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthCities } from '../actions/cityActions';
import CityCard from '../components/CityCard';
import CityFilter from '../components/CityFilter';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import CityPage from '../components/CityPage';
import NewCityForm from '../components/NewCityForm';
import Loading from '../components/Loading';

function CityContainer() {
    const cities = useSelector(state => state.cities)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const initSearch = ""
    const [searchTerm, setSearch] = useState(initSearch)

    useEffect(() => {
          console.log("mounting cities")
          dispatch(fecthCities())

          // cleanup function
          return () => {
              console.log("unmounting cities")
          }
    }, [dispatch]) 

    
    // handle filter function
    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return(
        <Container className="city-list">
          <Switch>

            <Route exact path="/cities/new" render={(routeInfo) => {
                return <NewCityForm goBack={() => routeInfo.history.push("/cities")} />
            }} />

            <Route exact path="/cities" render={() => {
                const foundCities = cities.filter((city) => city.country.toLowerCase() === searchTerm.toLowerCase() || city.name.toLowerCase() === searchTerm.toLowerCase())
                
                return(
                    <>
              <CityFilter searchTerm={searchTerm} handleSearch={handleSearch} handleClearClick={() => setSearch("")} /> 

               {loading ? <Loading /> : <CityCard cities={cities} foundCities={foundCities} searchTerm={searchTerm}/> }      
                    </>
                )

            }}>
            </Route>

             <Route path="/cities/:id" component={(routeInfo) => {
                    // console.log(routeInfo)
                    const paramsId = parseInt(routeInfo.match.params.id) 
                    const singleCity = cities.find((city) => city.id === paramsId)
                    return <CityPage city={singleCity} goBack={() => routeInfo.history.push("/cities")} />
                }}>

                </Route> 
            
          </Switch>       
                  
        </Container>
    )

}

export default CityContainer
