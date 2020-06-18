import React, { useState } from "react";
import "./GameCard.css";
import { Card, Image } from "semantic-ui-react";
import ReactCardFlip from "react-card-flip";

function GameCard({ name, img_url }) {
  const [flipped, setFlipped] = useState(false);
  const flipCard = () => {
    if (flipped === false) {
      setFlipped(true);
    }
  };
  return (
    <ReactCardFlip isFlipped={flipped} >
      <Card //front of card
        onClick={flipCard}
        raised
        wrapped="true"
        name={name}
        flipped={flipped}
        className="card-front"
      >
        <Image src={img_url} size="small" />
      </Card>
      <Card className="card-back">

      </Card>

    </ReactCardFlip>
  );
}

export default GameCard;
