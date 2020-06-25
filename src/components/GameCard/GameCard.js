import React from "react";
import "./GameCard.css";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

function GameCard({ item, cardNum, handleClick, flipped, disabled, matched }) {
  const icon1 = useMediaQuery({
    query: "(min-width: 750)",
  });
  const icon2 = useMediaQuery({ query: "(min-width: 600px)" });
  const icon3 = useMediaQuery({ query: "(min-width: 450px)" });
  const icon4 = useMediaQuery({ query: "(min-width: 100px)" });

  // options: "lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"

  const iconSize = () => {
    if (icon1) {
      return "8x";
    } else if (icon2) {
      return "6x";
    } else if (icon3) {
      return "4x";
    } else if (icon4) {
      return "2x";
    }
  };

  return (
    <ReactCardFlip isFlipped={flipped || matched}>
      <div
        className="card-front card"
        onClick={() => {
          if (disabled === "false") handleClick(cardNum, item);
        }}
      >
        <FontAwesomeIcon icon="question" className="symbol" size={iconSize()} />
      </div>

      <div className="card-back card">
        <FontAwesomeIcon
          icon={item.icon}
          className="symbol"
          size={iconSize()}
        />
      </div>
    </ReactCardFlip>
  );
}

export default GameCard;
