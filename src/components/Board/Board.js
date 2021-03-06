import React from "react";
import "./Board.css";
import GameCard from "../GameCard/GameCard";

function Board({ handleClick, cardArray, matched, disabled, flippedCards }) {
  const generateCards = () => {
    return cardArray.map((item, i) => {
      return (
        <GameCard
          handleClick={handleClick}
          flipped={flippedCards.includes(item)}
          key={item.id}
          cardNum={i}
          item={item}
          disabled={disabled}
          matched={matched.includes(item)}
        />
      );
    });
  };

  return <div className="board">{generateCards()}</div>;
}

export default Board;
