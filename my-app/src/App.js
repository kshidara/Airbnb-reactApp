import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


export default function App() {

  const cards = data.map(eachData => {
    return <Card  
              key={eachData.id}
              img={eachData.coverImg}
              rating={eachData.stats.rating} 
              reviewCount={eachData.stats.reviewCount}
              location={eachData.location}
              title={eachData.title}
              price={eachData.price}
            />
  })  

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>    
    </div>
  )
}