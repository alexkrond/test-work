function calculatePrices(products, exchangeRates) {
  if (!Array.isArray(products)) {
    throw new Error("Products должно быть массивом");
  }

  if (!fieldsCheck(products, exchangeRates)) {
    throw new Error("Для каждого продукта должны быть корректно заполнены все поля");
  }

  const prices = { RUB: 0 };

  products.forEach(product => {
    const {currency, quantity, price} = product;
    let totalProductPrice = quantity * price;

    if (currency !== "RUB") {
      totalProductPrice *= exchangeRates[currency];
    }

    prices.RUB += totalProductPrice;
  });

  for (let rate in exchangeRates){
    if (exchangeRates.hasOwnProperty(rate)) {
      prices[rate] = prices.RUB / exchangeRates[rate];
    }
  }

  for (let cur in prices){
    if (prices.hasOwnProperty(cur)) {
      prices[cur] = parseFloat(prices[cur].toFixed(2));
    }
  }

  return prices;
}

function fieldsCheck(products, exchangeRates) {
  const fields = ["name", "quantity", "currency", "price"];
  let check = true;

  products.forEach(product => {
    fields.forEach(field => {
      if (!product.hasOwnProperty(field)) {
        check = false;
      }
    });

    if (!(Number.isInteger(product.quantity) && product.quantity > 0 &&
        typeof product.price === "number" && product.price > 0 &&
        (exchangeRates.hasOwnProperty(product.currency) || product.currency === "RUB"))) {
      check = false;
    }
  });

  return check;
}

module.exports = calculatePrices;
