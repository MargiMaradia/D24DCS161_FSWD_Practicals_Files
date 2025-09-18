let count = 0;

const counterDisplay = document.getElementById('counter-display');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Fetch initial count from server
fetch('/counter')
  .then(res => res.json())
  .then(data => {
    count = data.count || 0;
    updateDisplay();
  });

// Update count on server
function updateServerCount() {
  fetch('/counter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count }),
  });
}

// Update UI
function updateDisplay() {
  counterDisplay.textContent = count;
}

// Button listeners
increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
  updateServerCount();
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) count--;
  updateDisplay();
  updateServerCount();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
  updateServerCount();
});
