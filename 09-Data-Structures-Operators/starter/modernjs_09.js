'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered at ${time} to ${address}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Your pasta has ${ing1}, ${ing2}, and ${ing3}`);
  },
};

// spread operator exercises
const firstArr = [7, 8, 9]; 
const newArr = [1, 2, ...firstArr]; // writes the sprArr values INTO the new array without having to manually write it out
console.log(newArr);

console.log(...newArr); // when you need to pass multiple elements into function

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // creating NEW ARRAY, not mutating original mainMenu subarray 
console.log(newMenu);

// shallow copying arrays w/ spread
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu);

// join arrays w/ spread
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

// iterables with spread operator (arrays, strings, maps, sets)
const str = 'Catrina';
const letters = [...str, ' ', 's'];
console.log(letters);
console.log(...str);

// spread operator with functions
const ingredients = ['spaghetti', 'mushrooms', 'meatballs'];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// spread operator with objects
const newRestaurant = {...restaurant, founder: 'Tony Soprano', established: '1999'};
console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Satrialle"s';
console.log(restaurantCopy);

// object destructuring exercises
// object destructuring with functions  + default values 
restaurant.orderDelivery({
  time: '22:30', 
  address: 'Via Del Sol 21', 
  mainIndex: 2, 
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Isle Delfino 50',
  starterIndex: 1
});

// basic destructure
const {name, openingHours, categories} = restaurant; // have to name the object's properties!
console.log(name, openingHours, categories);

// renaming object properties + destructuring
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// default values + renaming properties w/ object destructuring
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating object variables w/ destructuring
let num1 = 125;
let num2 = 900;
const obj = {num1: 50, num2: 7, num3: 13};
({num1, num2} = obj);
console.log(num1, num2);

// destructuring nested objects
const {fri: {open, close}} = openingHours; 
console.log(open, close);

// arr destructuring exercises
const arr = [2, 3, 4];
const a = arr[0]; // without arr destructuring
const b = arr[1]; // without arr destructuring
const c = arr[2]; // without arr destructuring

const [x, y, z] = arr; // destructured arr call

console.log(x,y,z);

const [first, ,second] = restaurant.categories; // leave a BLANK SPACE if you need other element destructured in arr
console.log(first, second);

// switching variable order in destructured arr 
let [main, , secondary] = restaurant.categories; 
[main, secondary] = [secondary, main]; 
console.log(main, secondary);

// functions with destructuring arr
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// nested arr destructuring
const nested = [2, 4, [5, 6]];
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// default values w/ destructuring 
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);