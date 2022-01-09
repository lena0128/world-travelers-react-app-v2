import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <ul id="nav-bar"> 
            
            <Link to="/cities" className="nav-link">
              <li id="cities">DESTINATIONS</li>
            </Link> 
            
            <Link to="/cities/new" className="nav-link">
              <li id="new-city">NEW DESTINATION</li>
            </Link>

            <Link to="/guides" className="nav-link">
              <li id="guides">TRAVEL GUIDES</li>
            </Link>

                <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" alt="mockup logo" style={{width: "50px", float: "right", padding: "12px"}} />   
        </ul>
    )

}

export default Navbar