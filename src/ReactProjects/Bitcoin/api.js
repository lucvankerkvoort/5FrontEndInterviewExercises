export const getBitcoin = async () => {
  try {
    const call = await fetch("https://api.coinbase.com/v2/prices/BTC-USD/buy", {
      method: "GET",
      authorization:
        "Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c",
    });
    const response = await call.json();

    return await response;
  } catch {
    return [];
  }
};
