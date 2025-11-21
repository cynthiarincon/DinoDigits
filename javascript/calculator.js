//STORY
console.log("cynthias calculator!"); //test


//I need a calculator that works by clicking buttons in order to display on the screen and create something that displays results, then be able to clear and do it all over again.

//declasre what each number is and what each operator does (+ adds, - subtracts, C clears display, = shows results, * multiplies etc....

//when button is clicked, the number/operator is shown on the display (only numbers first)

//Have every possibility of what can be resulted

//error when you do 10/0 and whatever else... big number?

//clear and reset

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}