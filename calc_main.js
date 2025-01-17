import { add } from './add.js';
import { sub } from './subtract.js';
import { mul } from './Multiply.js';
import { divide } from './Division.js';

function calculator() {
    const choice = prompt("Select operation:\n1. Addition\n2. Subtract\n3. Multiply\n4. Divide");

    if (!['1', '2', '3', '4'].includes(choice)) {
        alert("Invalid input");
        return calculator();
    }

    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers only.");
        return calculator();
    }

    let result;
    switch (choice) {
        case '1':
            result = add(num1, num2);
            break;
        case '2':
            result = sub(num1, num2);
            break;
        case '3':
            result = mul(num1, num2);
            break;
        case '4':
            result = divide(num1, num2);
            break;
    }

    alert(`The result is: ${result}`);

    const nextCalculation = prompt("Do you want to perform another calculation? (yes/no)");
    if (nextCalculation.toLowerCase() === 'yes') {
        calculator();
    }
}

calculator();