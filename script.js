// Get reference to the display element
const display = document.getElementById("display");

// Append a value (number or operator) to the display
function appendValue(value) {
  // Prevent appending multiple operators or starting with an operator
  if (
    ["+", "-", "*", "/"].includes(value) &&
    (display.value === "" ||
      ["+", "-", "*", "/"].includes(display.value.slice(-1)))
  ) {
    return;
  }

  // Append the value to the display
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result of the expression in the display
function calculateResult() {
  try {
    // Evaluate the expression and update the display
    display.value = eval(display.value);
  } catch (error) {
    // Handle errors by showing an "Error" message
    display.value = "Error";
    setTimeout(clearDisplay, 1500); // Clear the display after 1.5 seconds
  }
}

// Handle keyboard inputs for calculator functionality
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allow numbers, operators, and backspace
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
