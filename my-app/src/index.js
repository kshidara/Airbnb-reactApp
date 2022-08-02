import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import cardPhoto from './images/katie-zaferes.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero  />
    <Card 
      img={cardPhoto}
      rating="5.0"
      reviewCount={6}
      country="USA"      
      title="Life lessons with Katie Zafares"
      price={136}


    />
  </React.StrictMode>
);


