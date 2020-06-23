import React from "react";
import { Modal } from "semantic-ui-react";
import "./gameModal.css";

function GameModal({ end, handleModal }) {
  return (
    <Modal size="mini" open={end.end}>
      <div className="gameModal">
        <h1 className="fonts">{end.win ? "You Won!" : "Game Over"}</h1>
        <button className="newButton" onClick={handleModal}>New Game</button>
      </div>
    </Modal>
  );
}

export default GameModal;
