import React from "react"
import airbnbLogo from './images/airbnb-logo.png';
//still need to figure out how to organize components into separate folder and import 

export default function Navbar() {
  return (
    <nav>
        <img alt="Airbnb Logo" className="nav--logo" src={airbnbLogo}></img>

    </nav>
  );
}

