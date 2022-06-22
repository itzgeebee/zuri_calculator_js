
const add = (num1, num2) => num1 + num2 // addition

const subtract = (num1, num2) => num1 - num2 //subtraction

const divide = (num1, num2) => num1 / num2 //division

const multiply = (num1, num2) => num1 * num2 //multiplication

const modulo = (num1, num2) => num1 % num2 //multiplication

const operations = {
    "+": add,
    "-": subtract,
    "/": divide,
    "*": multiply,
    "%": modulo
}


const calculate = () => {
    let firstNumber = Number(prompt("Enter 1st number"))
    let secondNumber = Number(prompt("Enter 2nd number"))
    let operator = prompt(`Enter operator (${Object.keys(operations)})`)
    const calculation = operations[operator]
    const answer = calculation(firstNumber, secondNumber)
    alert(answer)
}

calculate()

