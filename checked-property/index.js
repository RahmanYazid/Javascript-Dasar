// checked property . menggunakan radio dan checkbox element html

const myCheckbox = document.getElementById("myCheckbox");
const myVisaBtn = document.getElementById("myVisaBtn");
const myMasterCardBtn = document.getElementById("myMasterCardBtn");
const myPaypalBtn = document.getElementById("myPaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribe`;
  } else {
    subResult.textContent = `You are not subscribe`;
  }
  if (myVisaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (myMasterCardBtn.checked) {
    paymentResult.textContent = `You are oaying wiht Master Card`;
  } else if (myPaypalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};
