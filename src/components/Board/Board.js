import React, { useState, useEffect } from "react";
import "./Board.css";
import GameCard from "../GameCard/GameCard";
import { Card } from "semantic-ui-react";

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
        />
      );
    });
  };

  return <div className="board">{generateCards()}</div>;
}

export default Board;
