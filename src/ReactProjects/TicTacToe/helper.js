import { useState } from "react";

const Logic = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [isPlayerX, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const move = (i) => {
    const copyBoard = [...board];

    if (copyBoard[i] || winner) return;

    copyBoard[i] = isPlayerX ? "X" : "O";
    setPlayer(!isPlayerX);
    hasAWinner(copyBoard);
    setBoard(copyBoard);
  };

  const hasAWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return setWinner(square[a]);
      }
    }
  };

  return {
    board,
    move,
    winner,
  };
};

export default Logic;
