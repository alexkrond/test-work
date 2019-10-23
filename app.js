const express = require("express");
const cron = require("node-cron");

const app = express();
const currencies = ["USD", "EUR"];
const exchangeRates = {};
const updateExchangeRates = require("./src/updateExchangeRates.js")(exchangeRates, currencies);
const api = require("./routes/api/api.js")(exchangeRates);


cron.schedule("0 0 */1 * * *", updateExchangeRates, {});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api", api);
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

const PORT = process.env.PORT || 5000;
(async () => {
  await updateExchangeRates();

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
})();
