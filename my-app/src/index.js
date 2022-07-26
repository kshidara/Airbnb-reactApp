import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero  />
    <Card  />
  </React.StrictMode>
);


