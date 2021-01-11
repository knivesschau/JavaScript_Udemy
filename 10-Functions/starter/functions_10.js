'use strict';

// default parameters exercises
const booking = [];

const bookFlight = function(flightNum, numOfPasengers = 1, price = 199 * numOfPasengers) {
    // solving with ES5 method below
    // numOfPasengers = numOfPasengers || 1; 
    // price = price || 199;

    const bookingInfo = {
        flightNum,
        numOfPasengers,
        price
    };
    
    console.log(bookingInfo);
    booking.push(bookingInfo);
};

bookFlight('PA124');
bookFlight('PA124', 5, 350);
bookFlight('PA124', 7);
bookFlight('PA124', 2);
bookFlight('PA124', undefined, 8); // bypassing a parameter and only changing one parameter

// argument passing exercises
const flight = "LH348";
const passengerInfo = {
    name: 'Princess Peach',
    passport: 2304910293
};

const checkIn = function(flightNum, passenger) {
    flightNum = "BE130";
    passenger.name = 'Mrs. ' + passenger.name;
    
    if (passenger.passport === 2304910293) {
        console.log('Checked in!');
    }
    else {
        console.log('Wrong passport info!');
    }
};

// checkIn(flight, passengerInfo);
console.log(flight); // does not change! primitive type values are copied, but it is not MUTATED
console.log(passengerInfo); // copying the REFERENCE to the object in memory, thats why it mutates

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(passengerInfo);
checkIn(flight, passengerInfo); // passport info no longer the same, so it alters the correct/incorrect passport prompts 

// javascript passes BY VALUE, not by reference! 

// first class and higher-order function exercises
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const capitalizeFirst = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const strTransformer = function(str, fn) { // higher-order function
    console.log(`Original: ${str}`);
    console.log(`Transform string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

strTransformer('JavaScript is the best!', capitalizeFirst);
strTransformer('JavaScript is the best!', oneWord);