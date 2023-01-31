import React from "react";
import Card from "../Card/Card";
import "./Ideas.css";

const Ideas = ({ ideas, deleteIdea }) => {
  const cards = ideas.map((idea) => (
    <Card
      id={idea.id}
      title={idea.title}
      description={idea.description}
      key={idea.id}
      deleteIdea={deleteIdea}
    />
  ));
  return <div className="ideas-container">{cards}</div>;
};

export default Ideas;
