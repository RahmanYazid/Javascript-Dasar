// if statements
// let age = 19;
// let hasLicense = true;

// if (age >= 18) {
//   console.log("You can drive");
//   if (hasLicense) {
//     console.log("You have license");
//   } else {
//     console.log("You do not have a license yet");
//   }
// } else {
//   console.log("you must be 18+ to have license");
// }
// contooh lain
// let age = 101;

// if (age >= 100) {
//   console.log("you are to old to enter");
// } else if (age < 0) {
//   console.log("your age canot below 0");
// } else if (age >= 18) {
//   console.log("your age is enough to enter");
// } else if (age == 0) {
//   console.log("you cant enter. you were just born");
// } else {
//   console.log("you must be 18+ to enter");
// }

// latihan menggunakan element html "membuat text input dan result"

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    myResult.textContent = `you are to old to enter`;
  } else if (age < 0) {
    myResult.textContent = `your age canot below 0`;
  } else if (age >= 18) {
    myResult.textContent = `your age is enough to enter`;
  } else if (age == 0) {
    myResult.textContent = `you cant enter. you were just born`;
  } else {
    myResult.textContent = `you must be 18+ to enter`;
  }
};
