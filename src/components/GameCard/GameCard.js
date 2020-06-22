import React from "react";
import "./GameCard.css";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

function GameCard({ item, cardNum, handleClick, flipped, disabled, matched }) {
  const icon10x = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const icon8x = useMediaQuery({ query: "(min-width: 500px)" });
  const icon6x = useMediaQuery({ query: "(min-width: 400px)" });
  const icon4x = useMediaQuery({ query: "(min-width: 300px)" });
  const icon3x = useMediaQuery({ query: "(min-width: 200px)" });

  const iconSize = () => {
    console.log(icon10x, icon8x, icon6x, icon4x, icon3x)
    if (icon10x) {
      console.log("10x");
      return "10x";
    } else if (icon8x) {
      console.log("8x");
      return "8x";
    } else if (icon6x) {
      console.log("6x");
      return "6x";
    } else if (icon4x) {
      console.log("4x");
      return "4x";
    } else if (icon3x) {
      console.log("3x");
      return "3x";
    }
  };

  return (
    <ReactCardFlip isFlipped={flipped || matched}>
      <div
        className="card-front card"
        onClick={() => {
          console.log("disabled:", disabled);
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
