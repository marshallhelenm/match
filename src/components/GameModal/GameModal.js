import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

function GameModal({ end, newGame, handleModal }) {
  return (
    <Modal size="mini" open={end.end}>
      <Modal.Header>{end.win ? "You Won!" : "Game Over"}</Modal.Header>
      <Modal.Actions>
        <Button
          positive
          onClick={handleModal}
        >
          New Game
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default GameModal;