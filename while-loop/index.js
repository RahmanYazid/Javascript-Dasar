// while loop = repeat some code while condition is true

// let username = "";
//
// while (username === "") {
//   username = window.prompt(`enter your name`);
// }
// console.log(`Hello ${username}`);

//menggunakan ||=or while mengulang hingga di input nilai
// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt(`enter your name`);
// }
// console.log(`Hello ${username}`);

//contoh lain

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);
  if (username === "nomad" && password === "n123") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("try again!");
  }
}
