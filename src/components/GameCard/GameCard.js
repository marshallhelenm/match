import React from "react";
import "./GameCard.css";
import ReactCardFlip from "react-card-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

function GameCard({ item, cardNum, handleClick, flipped, disabled, matched }) {
  const icon1 = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const icon2 = useMediaQuery({ query: "(min-width: 500px)" });
  const icon3 = useMediaQuery({ query: "(min-width: 400px)" });
  const icon4 = useMediaQuery({ query: "(min-width: 300px)" });
  const icon5 = useMediaQuery({ query: "(min-width: 250px)" });
  const icon6 = useMediaQuery({ query: "(min-width: 100px)" });

  const iconSize = () => {
    if (icon1) {
      return "8x";
    } else if (icon2) {
      return "6x";
    } else if (icon3) {
      return "4x";
    } else if (icon4) {
      return "2x";
    } else if (icon5) {
      return "lg";
    } else if (icon6) {
      return "";
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
