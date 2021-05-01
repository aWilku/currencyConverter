{
  const calculateResult = (requestedCurrency, amount) => {
    const courseEUR = 0.22;
    const courseCHF = 0.24;
    const courseUSD = 0.27;
    const courseGBP = 0.19;
    switch (requestedCurrency) {
      case "EUR":
        return (amount * courseEUR).toFixed(2)
      case "CHF":
        return (amount * courseCHF).toFixed(2)
      case "USD":
        return (amount * courseUSD).toFixed(2)
      case "GBP":
        return (amount * courseGBP).toFixed(2)
    }
  }

  const score = document.querySelector(".js-score");

  const scoreUpdate = (amount, result, requestedCurrency) => {
    score.innerHTML = `${amount} PLN = ${result} ${requestedCurrency}`;
  }

  const scoreReset = () => {
    score.innerText = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const requestedCurrencyElement = document.querySelector(".js-requestedCurrency");
    const requestedCurrency = requestedCurrencyElement.value;
    const amount = +amountElement.value;
    const result = calculateResult(requestedCurrency, amount);

    scoreUpdate(amount, result, requestedCurrency);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", scoreReset);
  };
  init();
}