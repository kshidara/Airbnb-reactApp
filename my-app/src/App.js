import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {

  const cards = data.map(eachData => {
    return <Card  
              key={eachData.id}
              // item={eachData}
              {...eachData}
              // above format spreads all properties as separate props into Card component
              // going back to id={item.id} title={item.title}  description={item.description} 

            />
  })  

  return (
    <div>
      <Navbar />
      <Hero  />
      <section className="cards-list">
        {cards}
      </section>    
    </div>
  )
}