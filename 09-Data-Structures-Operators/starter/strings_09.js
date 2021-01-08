'use strict';

// string manipulation exercises pt. 1
const airline = "PAL Philippine Airlines";
const plane = 'A460';

console.log(airline.length);
console.log(plane.length);

// string method examples
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Philippine'));

console.log(airline.slice(4)); // number is position which slicing of string will start (turns into substring)
console.log(airline.slice(4, 7)); // stops slicing BEFORE it reaches index position 7;

console.log(airline.slice(0, airline.indexOf(' '))); // slicing with indexOf
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // slicing with lastIndexOf

console.log(airline.slice(-2)); // negative slicing indexes (starts to the right of the string, going backwards)
console.log(airline.slice(1, -1)); // negative + positive indexes w/ splice

const checkMiddleSeat = function(seat) {
    const assignedSeat = seat.slice(-1);

    if (assignedSeat === 'B' || assignedSeat === 'E') {
        console.log('You are in the middle seat 😱');
    }
    else {
        console.log('Lucky!! 🤪');
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// string manipulation exercises pt. 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization for a passenger exercise
const passenger = 'mArIO';
const passengerLower = passenger.toLowerCase(); // first, convert all letters to lower case 
const passengerFormatted = passengerLower[0].toUpperCase() + passengerLower.slice(1); // join everything back together!
console.log(passengerFormatted);

// comparing emails exercise
const userEmail = 'mario@mushroomkingdom.org';
const enteredEmail = '  Mario@MushroomKingdom.Org \n';
const formattedEmail = enteredEmail.toLowerCase().trim();
console.log(formattedEmail);
console.log(userEmail === formattedEmail);

// replacing currency notation exercise
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // replace CREATES BRAND NEW STRING
console.log(priceUS);

// airport announcement exercise
const announcement = 'All passengers please come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate')); // solving with regular expression (g means GLOBALLY CHANGE)
// console.log(announcement.replaceAll('door', 'gate')); // new solution with new .replaceAll() method

// boolean methods
const newPlane = "Airbus A460neo";
console.log(plane.includes('A460'));
console.log(plane.includes('Boeing'));
console.log(newPlane.startsWith('Air'));
console.log(newPlane.startsWith('A'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
    console.log('This is part of the new airbus line');
}

// baggage check exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('Your baggage cannot be checked in.');
    }
    else {
        console.log('Baggage checked in!');
    }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun');

// string manipulation exercises pt. 3
console.log('a+very+nice+string'.split('+'));
console.log('Mario Luigi'.split(' '));

const [firstName, lastName] = 'Bowser Koopa'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// name capitalizer exercise 
const capitalizeName = function(name) {
    const lowerCaseName = name.split(' ');
    const formattedNames = [];

    for (const letter of lowerCaseName) {
        formattedNames.push(letter.replace(letter[0], letter[0].toUpperCase()));
    }
    console.log(formattedNames.join(' '));
};

capitalizeName('princess peach toadstool');
capitalizeName('luigi brotherton');

// padding strings
const message = "Please go to Gate 23!";
console.log(message.padStart(25, '+').padEnd(35, '+'));

// masking strings
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(303030200193));
console.log(maskCreditCard('222040404029'));

// repeat method
const airportAnnounce = 'Bad weather.... All Departures Delayed... ';
console.log(airportAnnounce.repeat(5));

const planesInQueue = function(n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}

planesInQueue(5);
planesInQueue(3);
planesInQueue(12);