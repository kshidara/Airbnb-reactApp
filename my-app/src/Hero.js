import React from "react"
import picsTemplate from './images/photo-grid.png';



export default function Hero() {
  return (
    <section className="hero">
        <img alt="Pic template" className="hero--photo" src={picsTemplate}></img>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind
           hosts --all without leaving home</p>
    </section>
    
  );
}

