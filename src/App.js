import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCityForm from './components/NewCityForm';
import CityList from './components/CityList'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
       <Route exact path="/cities" component={CityList} />
       <Route exact path='/cities/new' component={NewCityForm} />
    </div>
    </Router>
  );
}

export default App;
