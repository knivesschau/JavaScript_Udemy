'use strict';

// enhanced object literals
const openDays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

const operatingHours = {
  [openDays[3]]: {
    open: 12,
    close: 22,
  },
  [openDays[4]]: {
    open: 11,
    close: 23,
  },
  [openDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) { // improved function syntax for methods made with object literals ES6 updates
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  operatingHours, // call the declared object literal to copy it into object

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered at ${time} to ${address}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Your pasta has ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherToppings) {
    console.log(mainIngredient);
    console.log(otherToppings);
  },
};

console.log(restaurant.operatingHours);

// optional chaining exercises 
// non-optional chaining solutions
if (restaurant.operatingHours && restaurant.operatingHours.mon) {
  console.log(restaurant.operatingHours.mon.open);
}

// optional chaining solutions
console.log(restaurant.operatingHours?.mon?.open); // everything evaluated to the LEFT OF THE ? 

for (const day of openDays) {
  const isOpen = restaurant.operatingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, our hours begin at: ${isOpen}.`);
}

// optional chaining with methods 
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// optional chaining w/ arrays
const firstUser = [{
  name: 'Maria',
  email: 'maria123@wohooo.com'
}];

const users = [];

console.log(firstUser[0]?.name ?? 'User array empty');
console.log(users[0]?.name ?? 'User array empty');

// for...of loops with arrays
const loopMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of loopMenu) {
  console.log(item);
}

for (const [i, el] of loopMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// nullish coalescing operator 
restaurant.numGuests = 0;
const accurateGuest = restaurant.numGuests ?? 10; // nullish coalescing, evals on NULL values rather than TRUTHY values
console.log(accurateGuest); 

// more applications of && and || (short circuit eval)
const guests = restaurant.numGuests || 10; // prints the truthy value, aka the default value of 10 
console.log(guests); // but if restaurant.numGuests is defined, || will print that instead (first truthy value found)

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // prints IF ALL values are truthy 

// rest pattern exercises (spread operator on LEFT HAND SIDE) 
const rightArr = [1, 2, ...[3, 4]];
const [l, m, ...others] = [1, 2, 3, 4, 5]; // LEFT SIDE OF EQUALS SIGN IS REST PATTERN
console.log(l, m, others); // collects unused elements into new array after destructured values 

const [pizza, ,risotto, ...otherOptions] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // REST IS LAST CALL
console.log(pizza, risotto, otherOptions); // rest does NOT include skipped elements in destructure call 

// rest pattern with objects 
const {sat, ...weekdays} = restaurant.operatingHours;
console.log(weekdays);

// rest pattern with functions (rest parameters)
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(4, 6, 10, 15);
add(10, 15, 20);
add(20, 40, 50, 100, 200, 33);

restaurant.orderPizza('mushrooms', 'pineapple', 'olives', 'spinach', 'canadian bacon');
restaurant.orderPizza('pepperoni');

// spread operator exercises
const firstArr = [7, 8, 9]; 
const newArr = [1, 2, ...firstArr]; // writes the spare values INTO the new array without having to manually write it out
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
const {fri: {open, close}} = operatingHours; 
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