function calculate() {
  let leftSelect = document.querySelector("#currency1");
  let selectedLeft = leftSelect.options[leftSelect.selectedIndex];
  let currencyValue = selectedLeft.getAttribute("data-amount");

  let rightSelect = document.querySelector("#currency2");
  let selectedRight = rightSelect.options[rightSelect.selectedIndex];
  let currencyValueRight = selectedRight.getAttribute("data-amount");


  let amountToConvert = document.querySelector("#input").value;
  let output = document.querySelector("#output");
  let convertedAmount = ((currencyValue * amountToConvert) / currencyValueRight);
  output.value = convertedAmount.toFixed(2);

}
let addingNewCurrentBtn = document.querySelector('#add-now')

function newSectionVisibilty() {
  document.querySelector('#section-two').style.display = 'block';
}

function add() {
  let crOne = document.querySelector("#currency1");
  let crTwo = document.querySelector("#currency2")
  let exRate = document.querySelector('#conversion-rate').value
  let newAddedCurrencyArr = []
  let newCurrencyToAdd = document.querySelector('#new-currency').value
  newAddedCurrencyArr.push(newCurrencyToAdd);
  console.log(newAddedCurrencyArr);
  // create and appending new options to  the select list
  for (let i = 0; i < newAddedCurrencyArr.length; i++) {
    let optionValue = newAddedCurrencyArr[i];
    let optionText = newAddedCurrencyArr[i];
    let option = new Option(optionText, optionValue);
    option.setAttribute("data-amount", exRate);


    crOne.add(option, undefined);
  }
  for (let a = 0; a < newAddedCurrencyArr.length; a++) {
    let optionValue2 = newAddedCurrencyArr[a];
    let optionText2 = newAddedCurrencyArr[a];
    let option2 = new Option(optionText2, optionValue2);
    option2.setAttribute("data-amount", exRate);

    crTwo.add(option2, undefined);
  }

}