import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import card_data from "./card_data";

function App() {
  const [cards, setCards] = useState(card_data);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState("false");
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    console.log("shufflin the cards");
    let array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCards([...array]);
  }, []);

  // const checkMatch = () => {
  //   console.log("check for a match");
  //   if (flippedCards[0].name === flippedCards[1].name) {
  //     console.log("match!");
  //     setMatched([...matched, ...flippedCards]);
  //     setFlippedCards([]);
  //   } else {
  //     console.log("no match...");
  //     setFlippedCards([]);
  //   }
  // };

  const isMatch = (name) => {
    console.log(name, flippedCards);
    if (flippedCards[0].name === name) {
      console.log("match!");
      return true;
    } else {
      console.log("no match...");
      return false;
    }
  };

  const handleClick = (cardNum, item) => {
    console.log("handleClick");
    setDisabled("true");
    setFlippedCards([...flippedCards, item]);
    if (flippedCards.length < 1) {
      setDisabled("false");
      return;
    } else {
      if (isMatch(item.name)) {
        setMatched([...matched, flippedCards[0], item]);
      }
      setTimeout(() => setFlippedCards([]), 2000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Match 'Em!</h1>
      </header>
      <Board
        matched={matched}
        disabled={disabled}
        cardArray={cards}
        flippedCards={flippedCards}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
