import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <img
        src={require("../images/earth.png")} 
        alt="card"
        fill="currentColor"
        className="nav--image"
      />

      <h2 className="nav--text">my travel journal</h2>
    </div>
  );
}
