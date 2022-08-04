import React from "react";
import starPhoto from './images/star.png';


export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }



    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={props.coverImg} ></img>
            <div className="card--stats">
                <img className="star--photo" src={starPhoto} ></img>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) * {props.country}</span>
            </div> 
            <p className="title">{props.title}</p>
            <p className="cost--person"><span className="bold">From ${props.price} </span> / person</p>
        </div>
    )
}