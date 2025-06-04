// guessing number game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("please enter valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("please enter the valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low");
    } else if (guess > answer) {
      window.alert("Too high");
    } else {
      window.alert(
        `Correct! the answer was ${answer}. it took you ${attempts} atttemps`
      );
      running = false;
    }
  }
}
