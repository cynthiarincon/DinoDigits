//STORY
console.log("cynthias calculator!"); //test


// Create a calculator that responds to button clicks, displays input on screen, calculates results, and can be cleared to start over.

// Declare what each number is and what each operator does (+ adds, - subtracts, C clears display, = shows results, * multiplies, / divides).

// When a button is clicked, the number/operator is shown on the display.

// Handle all possible calculation outcomes.

// Show error for invalid operations (like dividing by zero or overflow).

// Clear display and reset calculator.

console.log("Cynthia's calculator!");

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Check for division by zero
        if (display.value.includes("/0")) {
            display.value = "Cannot divide by zero";
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Numbers and operators
    if ("0123456789+-*/.".includes(key)) {
        appendToDisplay(key);
    }

    // Enter key = calculate
    if (key === "Enter") {
        calculate();
    }

    // Backspace or Escape = clear
    if (key === "Backspace" || key === "Escape") {
        clearDisplay();
    }
});