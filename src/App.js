import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import card_data from "./card_data";
import GameModal from "./components/GameModal/GameModal";
import MatchHeader from "./components/MatchHeader/MatchHeader.js";

function App() {
  const [cards, setCards] = useState(card_data);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState("false");
  const [flippedCards, setFlippedCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [end, setEnd] = useState({ end: false, win: false });

  const turnMax = 20;

  const shuffleCards = () => {
    let array = cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCards([...array]);
  };

  const newGame = () => {
    console.log("new game");
    setDisabled("true");
    setFlippedCards([]);
    setMatched([]);
    setTurns(0);
    setEnd({ end: false, win: false });
    setTimeout(() => {
      shuffleCards();
      setDisabled("false");
    }, 500);
  };

  const handleModal = () => {
    newGame();
  };

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

  const handleCardClick = (cardNum, item) => {
    console.log("handleCardClick");
    setDisabled("true");
    setFlippedCards([...flippedCards, item]);
    if (flippedCards.length < 1) {
      setDisabled("false");
      return;
    } else {
      setDisabled("true");
      setTurns(turns + 1);
      if (isMatch(item.name)) {
        setMatched([...matched, flippedCards[0], item]);
        setFlippedCards([]);
        setDisabled("false");
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setDisabled("false");
        }, 1500);
      }
    }
  };

  useEffect(() => {
    newGame();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //game over
    if (turns >= turnMax) {
      //game over
      console.log("game over");
      setTimeout(() => {
        setEnd({ end: true, win: false });
      }, 1000);
    }
  }, [turns]);

  useEffect(() => {
    //game won
    if (matched.length === 16) {
      //game won
      console.log("game won!");
      setTimeout(() => {
        setEnd({ end: true, win: true });
      }, 1000);
    }
  }, [matched]);

  return (
    <div className="App">
      <GameModal end={end} handleModal={handleModal} />
      <MatchHeader newGame={newGame} turns={turns} turnMax={turnMax} />
      <div className="body">
        <Board
          matched={matched}
          disabled={disabled}
          cardArray={cards}
          flippedCards={flippedCards}
          handleClick={handleCardClick}
        />
      </div>
      <footer className="app-footer">
        <div>
          <p>Created by El Marshall</p>
        </div>
        <div>
          <a href="https://github.com/marshallhelenm/match">GitHub Repo</a> |{" "}
          <a href="https://marshallhelenm.me/">Portfolio</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
