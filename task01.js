'use strict'

let user = {};
user.name = 'PYLYP';
user.surname = 'SHEVCHENKO';
console.log(user);

user.name = 'SERGIY';
console.log(user);

delete user.name;
console.log(user);