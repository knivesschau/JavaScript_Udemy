'use strict';

// default parameters exercises
const booking = [];

const bookFlight = function (
  flightNum,
  numOfPasengers = 1,
  price = 199 * numOfPasengers
) {
  // solving with ES5 method below
  // numOfPasengers = numOfPasengers || 1;
  // price = price || 199;

  const bookingInfo = {
    flightNum,
    numOfPasengers,
    price,
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
const flight = 'LH348';
const passengerInfo = {
  name: 'Princess Peach',
  passport: 2304910293,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'BE130';
  passenger.name = 'Mrs. ' + passenger.name;

  if (passenger.passport === 2304910293) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport info!');
  }
};

// checkIn(flight, passengerInfo);
console.log(flight); // does not change! primitive type values are copied, but it is not MUTATED
console.log(passengerInfo); // copying the REFERENCE to the object in memory, thats why it mutates

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(passengerInfo);
checkIn(flight, passengerInfo); // passport info no longer the same, so it alters the correct/incorrect passport prompts

// javascript passes BY VALUE, not by reference!

// first class and higher-order function exercises
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const capitalizeFirst = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const strTransformer = function (str, fn) {
  // higher-order function
  console.log(`Original: ${str}`);
  console.log(`Transform string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

strTransformer('JavaScript is the best!', capitalizeFirst);
strTransformer('JavaScript is the best!', oneWord);

// functions returning functions exercises
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterStr = greet('Hey');
greeterStr('Peach');
greeterStr('Mario');
greet('Hello')('Luigi');

// arrow function refactor of greeting function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hiya')('Yoshi');

// call and apply method exercises
const southwest = {
  airline: 'Southwest',
  planeCode: 'SW',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.planeCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.planeCode}${flightNum}`, name });
  },
};

southwest.book(240, 'Bowser Koopa');
southwest.book(358, 'Monty Mole');
console.log(southwest);

const bookPlane = southwest.book;

const airWing = {
  airline: 'Air Wing',
  planeCode: 'AW',
  bookings: [],
};

// bookPlane(350, 'Princess Peach'); // does NOT WORK
bookPlane.call(airWing, 350, 'Princess Peach'); // use call method to explicitly set THIS keyword
console.log(airWing);

bookPlane.call(southwest, 240, 'Kamek Koopaling');
console.log(southwest);

const mushroomAir = {
  airline: 'Mushroom Air',
  planeCode: 'MK',
  bookings: [],
};

bookPlane.call(mushroomAir, 540, 'Kooper Koopington');

const flightData = [540, 'Toadette The Toad'];
bookPlane.apply(mushroomAir, flightData); // apply method is the same, but accepts an ARRAY OF DATA
bookPlane.call(mushroomAir, ...flightData); // same as APPLY METHOD
console.log(mushroomAir);

// bind method exercises
const bookMA = bookPlane.bind(mushroomAir); // bind method explicitly sets this keyword for functions (returns a new function)
const bookAW = bookPlane.bind(airWing);
const bookSW = bookPlane.bind(southwest);
bookMA(450, 'Larry Lakitu');

const bookMA540 = bookPlane.bind(mushroomAir, 540); // setting specific parameters (aka booking for a specific flight no.)
bookMA540('Kuribo the Shoe');
bookMA540('Tanooki Mario');

// bind method and event listeners
southwest.planes = 300;
southwest.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', southwest.buyPlane.bind(southwest));

// partial application with bind
const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(200));

// mini-challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Immediate Invoked Function Expressions (IIFE) exercises
// normal function expression
const runOnce = function () {
  console.log('This function will only run when we call it!');
};
runOnce();

// IIFE function expressions
(function () {
  console.log('This IIFE function will only run once!');
})();

(() => console.log('This arrow function will also only run once!'))();
