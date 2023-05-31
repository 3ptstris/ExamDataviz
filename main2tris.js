const counterElement = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increment-btn');
const decreaseBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

let counter = 0;

function updateCounter() {
  counterElement.textContent = counter;
}

function increase() {
  counter++;
  updateCounter();
}

function decrease() {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
}

function reset() {
  counter = 0;
  updateCounter();
}

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

updateCounter();
  
