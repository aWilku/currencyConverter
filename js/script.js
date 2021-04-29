let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let requestedCurrencyElement = document.querySelector(".js-requestedCurrency");
let score = document.querySelector(".js-score");
let courseEUR = 0.22;
let courseCHF = 0.24;
let courseUSD = 0.27;
let courseGBP = 0.19;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let requestedCurrency = requestedCurrencyElement.value;
  let amount = amountElement.value;
  let submit;
  let currencySymbol;

  switch (requestedCurrency) {
    case "EUR":
      submit = (amount * courseEUR).toFixed(2);
      currencySymbol = "€";
      break;
    case "CHF":
      submit = (amount * courseCHF).toFixed(2);
      currencySymbol = "₣";
      break;
    case "USD":
      submit = (amount * courseUSD).toFixed(2);
      currencySymbol = "$";
      break;
    case "GBP":
      submit = (amount * courseGBP).toFixed(2);
      currencySymbol = "£";
      break;
  }
  score.innerText = `${amount} zł = ${submit} ${currencySymbol}`;
});

formElement.addEventListener("reset", () => {
  score.innerText = "";
});
