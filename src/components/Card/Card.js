import React from "react";
import "./Card.css";

const Card = ({ id, title, description, deleteIdea }) => {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  );
};

export default Card;
