'use strict'

function calculator(a, operator, b) {
    process.stdout.write(a + " " + operator + " " + b + " = ");

    let result = "";
    try {
        if (isNaN(a) || isNaN(b)) {
            throw "Wrong number!";

        } else if (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
            throw "Wrong operator!";

        } else {
            switch (operator) {
                case '+': {
                    result = a + b;
                    break;
                }

                case '-': {
                    result = a - b;
                    break;
                }

                case '*': {
                    result = a * b;
                    break
                }

                case '/': {
                    if (b == 0) {
                        throw ('Divided by 0 can not be')
                    } else {
                        result = a / b;
                        break;
                    }
                }
            }
        }
    } catch (error) {
        process.stdout.write(error);
    }
    return result;
}

let a = 10;
let b = 2;

console.log(calculator(a, '+', b));
console.log(calculator(a, '-', b));
console.log(calculator(a, '*', b));
console.log(calculator(a, '/', b));
console.log();
console.log(calculator('a', '+', b));
console.log(calculator(a, 'add', b));
console.log(calculator(a, '+', 'b'));
console.log(calculator(a, '|', b));