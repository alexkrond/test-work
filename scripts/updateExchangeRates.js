const fetch = require("node-fetch");
const url = "https://www.cbr-xml-daily.ru/daily_json.js";

function updateExchangeRates(exchangeRates, currencies) {
  return async () => {
    const res = await fetch(url);
    const json = await res.json();
    currencies.forEach(cur => {
      if (json.Valute.hasOwnProperty(cur)) {
        exchangeRates[cur] = json.Valute[cur].Value;
      } else {
        throw new Error(`Валюта ${cur} недоступна`);
      }
    });
  }
}

module.exports = updateExchangeRates;
