'use strict'

let employeeSalaries = {
    worker1: 1000,
    worker2: 1250,
    worker3: 1500,
    worker4: 1750,
    worker5: 2000,
    worker6: 2250,
    worker7: 2500,
    worker8: 2750
}

let sumOfSalaries = 0;

for (let salary in employeeSalaries) {
    sumOfSalaries += employeeSalaries[salary];
}

console.log('Sum of salaries = $' + sumOfSalaries);