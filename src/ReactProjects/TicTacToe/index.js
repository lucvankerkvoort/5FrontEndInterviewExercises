import React from "react";
import Logic from "./helper";
import { Tile, Board } from "./styles";

const TicTacToe = () => {
  const { board, move, winner } = Logic();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {winner && `The winner is: ${winner}`}
      </h1>
      <Board>
        {board.map((item, i) => (
          <Tile onClick={() => move(i)}>{item}</Tile>
        ))}
      </Board>
    </div>
  );
};

export default TicTacToe;
