/* eslint-disable */
import "bootstrap";
import "./style.css";
//Varables
const FORM = document.querySelector("form");
const ALERTFAIL = document.querySelector("#alertBox");
const ALERTSUCCESS = document.querySelector("#alertBox2");
const cardAlert = document.querySelector("#alertRow");
const cardNumber = document.querySelector("#username");
const cardCvc = document.querySelector("#password");
const cardAmount = document.querySelector("#amount");
const cardFirstName = document.querySelector("#fname");
const cardLastName = document.querySelector("#lname");
const cardCity = document.querySelector("#city");
const cardState = document.querySelector("#browser");
const cardPostCode = document.querySelector("#postcode");
const cardType1 = document.querySelector("#contactChoice1");
const cardType2 = document.querySelector("#contactChoice2");
const cardType3 = document.querySelector("#contactChoice3");
const cardType4 = document.querySelector("#contactChoice4");
let count = 0;
//Submit needs to be applied to FORM
window.onload = function() {
  FORM.addEventListener("submit", event => {
    event.preventDefault();
    count = 0;
    checkFirstName();
    checkLastName();
    checkCity();
    checkPostCode();
    checkAmount();
    checkCvc();
    checkCardNumber();
    checkState();
    checkType();
    if (count == 9) {
      isSuccess();
    }
  });
};
const checkType = () => {
  if (
    cardType1.checked == true ||
    cardType2.checked == true ||
    cardType3.checked == true ||
    cardType4.checked == true
  ) {
    cardType1.classList.remove("is-invalid");
    cardType1.classList.add("is-valid");
    cardType2.classList.remove("is-invalid");
    cardType2.classList.add("is-valid");
    cardType3.classList.remove("is-invalid");
    cardType3.classList.add("is-valid");
    cardType4.classList.remove("is-invalid");
    cardType4.classList.add("is-valid");
    count += 1;
  } else {
    cardType1.classList.remove("is-valid");
    cardType1.classList.add("is-invalid");
    cardType2.classList.remove("is-valid");
    cardType2.classList.add("is-invalid");
    cardType3.classList.remove("is-valid");
    cardType3.classList.add("is-invalid");
    cardType4.classList.remove("is-valid");
    cardType4.classList.add("is-invalid");
    isFail();
  }
};

const checkState = () => {
  if (cardState.value != "") {
    cardState.classList.remove("is-invalid");
    cardState.classList.add("is-valid");
    count += 1;
  } else {
    cardState.classList.remove("is-valid");
    cardState.classList.add("is-invalid");
    return checkState == false;
    isFail();
  }
};
const checkCardNumber = () => {
  if (isNumber(cardNumber.value) && isLuhn(cardNumber.value)) {
    cardNumber.classList.remove("is-invalid");
    cardNumber.classList.add("is-valid");
    count += 1;
  } else {
    cardNumber.classList.remove("is-valid");
    cardNumber.classList.add("is-invalid");
    isFail();
  }
};

const checkCvc = () => {
  if (isNumberCvc(cardCvc.value)) {
    cardCvc.classList.remove("is-invalid");
    cardCvc.classList.add("is-valid");
    count += 1;
  } else {
    cardCvc.classList.remove("is-valid");
    cardCvc.classList.add("is-invalid");
    isFail();
  }
};
const checkAmount = () => {
  if (isNumber(cardAmount.value) && cardAmount.value > 0) {
    cardAmount.classList.remove("is-invalid");
    cardAmount.classList.add("is-valid");
    count += 1;
  } else {
    cardAmount.classList.remove("is-valid");
    cardAmount.classList.add("is-invalid");
    isFail();
  }
};
const checkPostCode = () => {
  if (isNumber(cardPostCode.value)) {
    cardPostCode.classList.remove("is-invalid");
    cardPostCode.classList.add("is-valid");
    count += 1;
  } else {
    cardPostCode.classList.remove("is-valid");
    cardPostCode.classList.add("is-invalid");
    isFail();
  }
};
//Llama a la función isString y le pasa el valor de la variable nuestra.
const checkFirstName = () => {
  if (isString(cardFirstName.value)) {
    cardFirstName.classList.remove("is-invalid");
    cardFirstName.classList.add("is-valid");
    count += 1;
  } else {
    cardFirstName.classList.remove("is-valid");
    cardFirstName.classList.add("is-invalid");
    isFail();
  }
};

const checkLastName = () => {
  if (isString(cardLastName.value)) {
    cardLastName.classList.remove("is-invalid");
    cardLastName.classList.add("is-valid");
    count += 1;
  } else {
    cardLastName.classList.remove("is-valid");
    cardLastName.classList.add("is-invalid");
    isFail();
  }
};

const checkCity = () => {
  if (isString(cardCity.value)) {
    cardCity.classList.remove("is-invalid");
    cardCity.classList.add("is-valid");
    count += 1;
  } else {
    cardCity.classList.remove("is-valid");
    cardCity.classList.add("is-invalid");
    isFail();
  }
};
//Comprueba que sean letras
const isString = text => {
  return /^[a-zA-Z]+$/.test(text);
};

const isNumber = text => {
  return /^[0-9]+$/.test(text);
};
const isNumberCvc = text => {
  return /^[0-9]{3,4}$/.test(text);
};

const isLuhn = cardNumber => {
  console.log(cardNumber);
  let s = 0;
  let doubleDigit = false;
  for (let index = cardNumber.length - 1; index >= 0; index--) {
    let digit = +cardNumber[index];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 == 0;
};

const isFail = () => {
  ALERTSUCCESS.classList.remove("d-block");
  ALERTSUCCESS.classList.add("d-none");
  ALERTFAIL.classList.remove("d-none");
  ALERTFAIL.classList.add("d-block");
};

const isSuccess = () => {
  ALERTFAIL.classList.remove("d-block");
  ALERTFAIL.classList.add("d-none");
  ALERTSUCCESS.classList.remove("d-none");
  ALERTSUCCESS.classList.add("d-block");
};
