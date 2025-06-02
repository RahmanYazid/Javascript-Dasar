// counting program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const hitungLabel = document.getElementById("hitungLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  hitungLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  hitungLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  hitungLabel.textContent = count;
};
