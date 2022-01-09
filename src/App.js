import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContainer from './containers/UserContainer';
import CityContainer from './containers/CityContainer'; 
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
       <Route path="/cities" component={CityContainer} />
       <Route path='/users' component={UserContainer} />
    </div>
    </Router>
  );
}

export default App;
