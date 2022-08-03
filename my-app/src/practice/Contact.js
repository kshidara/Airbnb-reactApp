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

        const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )
}


// 1. What does the `.map()` array method do?
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.


// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?
// It makes our code more "self-sustaining" - not requiring
// additional changes whenever the data changes.