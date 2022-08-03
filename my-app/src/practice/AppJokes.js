

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App() {

    const jokesElements = jokesData.map(joke => {
        return <Joke  setup={joke.question}
                      punchline={joke.punchline}  />
    })
    
    return (

        <div>
            {jokesElements}
        </div>
    )
}
            