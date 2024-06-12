let num1 = "";
let num2 = "";
let operator = "";
let input = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            try {
                let result = divide(num1, num2);
                return result;
            } catch(error) {
                console.error("Error: ", error.message);
            }
            break;
        default:
            console.log("Invalid operator");
    }
}

function displayValue (value) {
    const display = document.querySelector(".display");
    display.textContent = value;
}

function clearDisplay() {
    const display = document.querySelector(".display");
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
    input = "";
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "clear") {
            clearDisplay();
        } else if (button.textContent === "delete") {

        } else if (button.textContent === "=") {
            displayValue(operate(parseFloat(num1), parseFloat(num2), operator));
            num1 = "";
            num2 = "";
            operator = "";
            input = "";
        } else  if (isNaN(button.textContent)) {
            operator = button.textContent;
            input += operator;
            displayValue(input);
        } else {
            if (operator === "") {
                num1 += button.textContent;
            } else {
                num2 += button.textContent;
            }
            input += parseFloat(button.textContent);
            displayValue(input);
        }
    })
})
