"use strict";
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (nOne, nTwo, act) => {
    if (act === 'add') {
        return nOne + nTwo;
    }
    else {
        return nOne - nTwo;
    }
};
let logDetails;
logDetails = (minja) => {
    console.log(`${minja.name} is ${minja.age} years old`);
};
