import React, { useState } from "react";
import { getBitcoin } from "./api";
import { compose } from "./utils";
import { Button, List, Application } from "./styles";

function App() {
  const [hasBeenPressed, setPressed] = useState(false);
  const [bitcoinPrice, setBitcoinPrice] = useState([]);

  const storeAmount = ({ data }) => {
    console.log(data);
    if (!data) return;

    const { amount } = data;

    const prices = [parseInt(amount), ...bitcoinPrice].slice(0, 2);

    setBitcoinPrice(prices);
  };

  const bitcoinCall = compose(storeAmount, getBitcoin);

  return (
    <Application className="App">
      <Button
        isPressed={hasBeenPressed}
        onClick={() => {
          if (!hasBeenPressed) setPressed(true);
          bitcoinCall();
        }}
      >
        {hasBeenPressed ? "refresh Bitcoin price" : "get Bitcoin price"}
      </Button>
      <div>
        {bitcoinPrice && (
          <List>
            {bitcoinPrice.map((value, i) => (
              <div key={i}>
                {i === 0 ? "Current price: " : "Previous price: "} {value}
              </div>
            ))}
          </List>
        )}
      </div>
    </Application>
  );
}

export default App;
