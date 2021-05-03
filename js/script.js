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

  const textResult = document.querySelector(".js-result");

  const resultUpdate = (amount, result, requestedCurrency) => {
    textResult.innerHTML = `${amount} PLN = ${result} ${requestedCurrency}`;
  }

  const resultReset = () => {
    textResult.innerHTML = "";
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const requestedCurrencyElement = document.querySelector(".js-requestedCurrency");
    const requestedCurrency = requestedCurrencyElement.value;
    const amount = +amountElement.value;
    const result = calculateResult(requestedCurrency, amount);

    resultUpdate(amount, result, requestedCurrency);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", resultReset);
  };
  init();
}