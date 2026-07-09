import React from "react";
import "./Card.css";

function Card({ title, description, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} ></img>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;