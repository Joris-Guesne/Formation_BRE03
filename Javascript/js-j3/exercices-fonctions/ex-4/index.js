function computeVat(price, vat = 1.2) {
  let finalPrice = price * vat;
  return finalPrice;
}

function computePrice(lowVatPrices, highVatPrices) {
  let completeCommand = 0;
  for (let i = 0; i < lowVatPrices.length; i++) {
    completeCommand += computeVat(lowVatPrices[i], 1.1);
  }
  for (let i = 0; i < highVatPrices.length; i++) {
    completeCommand += computeVat(highVatPrices[i]);
  }
  return completeCommand;
}

console.log(computePrice([10, 15], [20]));
console.log(computePrice([13], [20, 50, 8]));
console.log(computePrice([20], [20]));
