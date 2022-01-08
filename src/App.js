import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCityForm from './components/NewCityForm';
import CityContainer from './containers/CityContainer'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
       <Route path="/cities" component={CityContainer} />
    </div>
    </Router>
  );
}

export default App;
