import React from "react";
import { Game, Options, Option } from "./styles";
import Logic from "./utils";

export default function App() {
  const {
    Info,
    restart,
    reset,
    game,
    message,
    options,
    compSelection,
    usersSelection,
  } = Logic();

  const images = {
    rock: "https://cdn-icons-png.flaticon.com/512/3562/3562093.png",
    paper: "https://cdn-icons-png.flaticon.com/512/2949/2949963.png",
    scissors: "https://cdn-icons-png.flaticon.com/512/4151/4151732.png",
  };

  return (
    <>
      <Info />
      <Game>
        {message}
        <Options>
          {options.map((item, i) => (
            <Option
              id={item}
              key={i}
              disabled={restart && item !== usersSelection}
              onClick={() => game(item)}
            >
              <img src={images[item]} alt={item} height="100%" />
            </Option>
          ))}
        </Options>

        <Options>
          {options.map((item, i) => (
            <Option key={i} disabled={item !== compSelection}>
              <img src={images[item]} alt={item} height="100%" />
            </Option>
          ))}
        </Options>

        <div>{restart && <button onClick={() => reset()}>restart</button>}</div>
      </Game>
    </>
  );
}
