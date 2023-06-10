import React from "react";

export default function Hero(props) {
  return (
    
    <div className="hero">
              <img src={require(`../images/${props.image}`)} alt="card" className= "hero--image"/>

    <div className="hero--stats">
      <img src={require(`../images/${props.location}`)} alt="card" className="hero--icon"/>
      <span className="hero--title">{props.country}</span>
      <a href={props.link} className="hero--link">{props.link}</a>
      <h2 className="hero--landmark">{props.landmark}</h2>
      <span className="hero--date">{props.date}</span>
      <p className="hero--description">{props.description}</p>
      </div>






    </div>
  );
}
