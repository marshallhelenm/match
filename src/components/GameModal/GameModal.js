import React from "react";
import { Modal, Button } from "semantic-ui-react";
import "./gameModal.css";

function GameModal({ end, newGame, handleModal }) {
  return (
    <Modal size="mini" open={end.end}>
      <div className="gameModal">
        <h1 className="fonts" >{end.win ? "You Won!" : "Game Over"}</h1>
          <Button positive onClick={handleModal}>
            New Game
          </Button>
      </div>
    </Modal>
  );
}

export default GameModal;
