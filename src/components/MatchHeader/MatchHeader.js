import React from "react";
import "./MatchHeader.css"


function MatchHeader({ newGame, turns, turnMax }) {
  return (
    <header className="App-header">
      <div className="header-item">
        <button className="newButton topBox" onClick={newGame}>
          New Game
        </button>
      </div>
      <div className="header-item">
        <h1 className="topBox">Match 'Em!</h1>
      </div>
      <div className="header-item">
        <h3 className="topBox">Moves: {turnMax - turns}</h3>
      </div>
    </header>
  );
}

export default MatchHeader;
