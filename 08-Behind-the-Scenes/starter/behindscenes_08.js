'use strict';

// scope chain example function
function calcAge(birthYear) {
    const age = 2020 - birthYear; 

    function printAge() {
        let output = `You are ${firstName}, ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; 
            const firstName = 'Maria'; // scope chain lookup not necessary if variable is declared within block scope (create NEW variable)
            const str = `Oh, and you're a millenial ${firstName}!`;
            console.log(str);

            function add(a, b) { // block scope ES6 example, won't run outside scope 
                return a + b;
            }

            output = 'Updating the output!'; // re-assinging outer scope's variable 
        }

        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age; 
}

const firstName = 'Catrina';
calcAge(1993);

// hoisting examples for variables 
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // var is hoisted to UNDEFINED
let job = 'teacher'; // cannot access before initilization because it is in the TDZ (temporal dead zone)
const year = 1990;  // same as let, in the TDZ 

// hoisting for functions 
console.log(hoistDecl(2, 3));
// console.log(hoistExpr(2, 3));
// console.log(hoistArr(2, 3));

function hoistDecl(a,b) { // functions declarations are hoisted 
    return a + b;
}

const hoistExpr = function(a,b) { // cannot access before initilization for function expression (currently a "const variable")
    return a + b;
}

const hoistArr = (a, b) => a + b; // same as function expression, arrow func is in the TDZ because function assigned to variable 

// another hoisting example for functions 
if (!numProducts) {
    clearShoppingCart();
}

var numProducts = 10; // function console statement ran due to var hoisting and being turned into "undefined"

function clearShoppingCart() {
    console.log('All products removed!');
}

// this keyword exercises 
console.log(this); // global object pointing to window object (aka the browser)

const ageCalc = function(birthYr) {
    console.log(2020 - birthYr);
    console.log(this); // undefined using strict mode, prevents it from being in window object
}

const arrowAge = brthYr => {
	console.log(2055 - brthYr);
	console.log(this); // arrow func becomes lexical "this" keyword, goes to parent scope (aka the window global object)
}

const myself = {
	year: 1993, 
	calcuAge: function() {
		console.log(this); // points towards object that is calling the method 
		console.log(2055 - this.year);
	}
}

myself.calcuAge();

const newPerson = {
	year: 1980
}

newPerson.calcuAge = myself.calcuAge; // method borrowing, borrow method from one object to another 
newPerson.calcuAge();

ageCalc(1990);
arrowAge(1970);

// primitive vs reference value examples
let lastName = "Craig"; 
let oldLastName = lastName; // primitive value saved as it's own piece of memory into the stack 
lastName = "Johnson";
console.log(lastName, oldLastName);

const daniel = {
    firstName: 'Daniel',
    lastName: 'Craig',
    age: 35
};

const marriedDaniel = daniel;  // copying the REFERENCE, which then points to the same object 
marriedDaniel.lastName = 'Johnson'; // does not create a new object in heap, MUTATES the original object and values 

console.log('Before marriage:', daniel); 
console.log('After marriage:', marriedDaniel);

// to shallow copy objects w/o mutating values, use Object.assign({}, x) to merge objects together. ONLY WORKS FOR NON-TIERED OBJECTS