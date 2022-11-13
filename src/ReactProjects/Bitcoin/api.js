import { useState } from "react";

export const GetBitcoin = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState([]);

  const getCoin = async () => {
    try {
      const call = await fetch(
        "https://api.coinbase.com/v2/prices/BTC-USD/buy",
        {
          method: "GET",
          authorization:
            "Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c",
        }
      );
      const response = await call.json();
      storeAmount(response);
    } catch {
      return [];
    }
  };

  const storeAmount = ({ data }) => {
    if (!data) return;

    const { amount } = data;

    const prices = [parseInt(amount), ...bitcoinPrice].slice(0, 2);

    setBitcoinPrice(prices);
  };

  return { getCoin, bitcoinPrice };
};

export default GetBitcoin;
