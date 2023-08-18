// Selecting elements from the DOM
var counterElement = document.getElementById("counter");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");

// Initial count value
var count = 0;

// Function to update the displayed count
function updateCounter() {
  counterElement.textContent = count;
}

// Event listeners for the buttons
incrementButton.onclick = function() {
  count++; // Increase the count
  updateCounter(); // Update the displayed count
};

decrementButton.onclick = function() {
  count--; // Decrease the count
  updateCounter(); // Update the displayed count
};
