import React from "react";
import starPhoto from './images/star.png';


export default function Card(props) {

    return (
        <div className="card">
            <img className="card--photo" src={props.img} ></img>
            <div className="card--stats">
                <img className="star--photo" src={starPhoto} ></img>
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) * {props.country}</span>
            </div> 
            <p className="title">{props.title}</p>
            <p className="cost--person"><span className="bold">From ${props.price} </span> / person</p>
        </div>
    )
}