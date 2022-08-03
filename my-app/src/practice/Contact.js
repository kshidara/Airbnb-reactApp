/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.   --> make use of the curly brakets!!!

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/


import React from "react"
import Joke from "./Joke"

export default function App() {
    
        const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]    return (
        <div>
            {colors}
        </div>

        )
}

            {/*<Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
                isPun={true}
                upvotes={10}
                downvotes={2}

            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
                isPun={true}

            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
                isPun={true}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
                isPun={true}

            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
                isPun={true}

            />*/}