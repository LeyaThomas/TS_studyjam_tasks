"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerUser(name, birthYear) {
    var isAge = checkAge(birthYear);
    if (isAge) {
        console.log("Registration Success!");
        console.log(name + " has been registered successfully");
    }
    else {
        console.log("Registration Failed");
    }
}
function checkAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age >= 18;
}
registerUser('Leya', 2002);
