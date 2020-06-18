import React from "react";
import "./Board.css";
import card_data from "../../card_data";
import GameCard from "../GameCard/GameCard";
import { Card } from "semantic-ui-react";

function Board() {
  const generateCards = () => {
    return card_data.map((item) => {
      return <GameCard key={item.id} name={item.name} img_url={item.img_url} />;
    });
  };
  //need to provide to the card an id and a name

  return (
      <Card.Group size="small" centered className="board">
        {generateCards()}
      </Card.Group>
  );
}

export default Board;
