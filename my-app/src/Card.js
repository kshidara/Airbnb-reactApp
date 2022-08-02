import React from "react";
import cardPhoto from './images/katie-zaferes.png';
import starPhoto from './images/star.png';


export default function Card() {
    return (
        <div className="card">
            <img className="card--photo" src={cardPhoto} ></img>
            <div className="card--stats">
                <img className="star--photo" src={starPhoto} ></img>
                <span className="gray">5.0 </span>
                <span className="gray">(6) * USA</span>
            </div> 
            <p className="title">Life lessons with Katie Zaferes</p>
            <p className="cost--person"><span className="bold">From $136 </span> / person</p>
        </div>
    )
}