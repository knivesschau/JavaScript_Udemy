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
};

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