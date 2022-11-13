import React, { useState } from "react";
import GetBitcoin from "./api";
import { Button, List, Application } from "./styles";

function App() {
  const [hasBeenPressed, setPressed] = useState(false);

  const { getCoin, bitcoinPrice } = GetBitcoin();

  return (
    <Application className="App">
      <Button
        isPressed={hasBeenPressed}
        onClick={async () => {
          if (!hasBeenPressed) setPressed(true);
          getCoin();
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
