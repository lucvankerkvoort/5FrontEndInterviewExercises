import React, { useEffect, useState } from "react";
import { Scores } from "./styles";
const Logic = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [usersSelection, setUserSelection] = useState(null);
  const [compSelection, setCompSelection] = useState(null);
  const [message, setMessage] = useState(null);
  const [round, setRounds] = useState(5);
  const [restart, setRestart] = useState(false);

  const options = ["rock", "paper", "scissors"];

  const reset = () => {
    setUserScore(0);
    setCompScore(0);
    setCompSelection(null);
    setUserSelection(null);
    setRounds(5);
    setMessage(null);
    setRestart(false);

    setBoxShadow();
  };
  const winner = () => {
    setRestart(true);

    if (userScore === compScore) return setMessage("its a Tie");
    return userScore > compScore
      ? setMessage("you are the winner")
      : setMessage("You lost");
  };

  const setBoxShadow = (item) => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.style.boxShadow = "none";
      button.style.border = "none";
    });

    if (item) {
      const selected = document.getElementById(item);
      selected.style.boxShadow = "0px 0px 12px black";
      selected.style.border = "5px solid yellow";
    }
  };

  const game = (userSelection) => {
    setBoxShadow(userSelection);

    setRounds(round - 1);

    const random = Math.floor(Math.random() * options.length);

    const compChoice = options[random];
    setCompSelection(compChoice);
    setUserSelection(userSelection);

    const combinations = {
      rock: options[2],
      paper: options[0],
      scissors: options[1],
    };

    // Logic for a Tie game
    if (userSelection === compChoice) {
      setMessage("Tie");
      return;
    }

    // Logic for scoring
    if (combinations[userSelection] === compChoice) {
      setUserScore(userScore + 1);
      setMessage("You win this round");
    } else {
      setCompScore(compScore + 1);
      setMessage("You lose this round");
    }
  };

  useEffect(() => {
    if (round < 1) {
      winner();
    }
  }, [round]);

  const Info = () => (
    <Scores>
      <div>Rounds Left: {round}</div>
      <div>
        User Score: {userScore}
        <br />
        Computer Score: {compScore}
      </div>
    </Scores>
  );

  return {
    game,
    reset,
    message,
    restart,
    options,
    Info,
    usersSelection,
    compSelection,
  };
};

export default Logic;
