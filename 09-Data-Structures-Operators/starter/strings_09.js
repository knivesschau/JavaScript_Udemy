'use strict';

// string manipulation exercises
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