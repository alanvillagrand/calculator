let num1 = 0;
let num2 = 0;
let operation = "";

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

function operate(num1, num2, operation) {
    switch (operation) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            try {
                let result = divide(num1, num2);
                return result;
            } catch(error) {
                console.error("Error: ", error.message);
            }
            break;
        default:
            console.log("Invalid operation");
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    console.log("test");
    button.addEventListener("click", () => {
        console.log(button.textContent);
    })
})
