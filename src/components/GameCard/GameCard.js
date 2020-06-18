import React, { useState } from "react";
import "./GameCard.css";
import { Card, Image } from "semantic-ui-react";

function GameCard({ id, name, img_url }) {
  const [flipped, setFlipped] = useState("down");
  const flipCard = (id) => {
    if (flipped === "down") {
      setFlipped("up");
    }
  };
  return (
    <Card
      onClick={flipCard}
      id={id}
      raised
      wrapped="true"
      name={name}
      flipped={flipCard(id)}
    >
      <Image src={img_url} size="small" />
    </Card>
  );
}

export default GameCard;
