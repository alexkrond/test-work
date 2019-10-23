const express = require("express");
const calculatePrices = require("../../src/calculatePrices.js");

function initRouter(exchangeRates) {
  const router = express.Router();

  router.post("/getprices", (req, res) => {
    let prices;

    if (req.body.hasOwnProperty("products")) {
      try {
        prices = calculatePrices(req.body.products, exchangeRates);
        res.status(200).send({...prices});
      } catch (e) {
        res.status(400).send({status: "false", msg: e.message});
      }
    } else {
      res.status(400).send({status: "false", msg: "В запросе отсутствует поле products"});
    }
  });

  return router
}

module.exports = initRouter;
