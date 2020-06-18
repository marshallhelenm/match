import React from "react";
import "./GameCard.css";
import { Icon } from "semantic-ui-react";
import ReactCardFlip from "react-card-flip";

function GameCard({ item, cardNum, handleClick, flipped, disabled, matched }) {
  return (
    <ReactCardFlip isFlipped={flipped || matched}>
      <div
        className="card-front card"
        onClick={() => {
          console.log('disabled:', disabled)
          if (disabled) handleClick(cardNum, item);
        }}
      >
        <Icon name="question" size="massive" color="black" />
      </div>

      <div className="card-back card">
        <Icon name={item.icon} size="massive" color="black" />
      </div>
    </ReactCardFlip>
  );
}

export default GameCard;
