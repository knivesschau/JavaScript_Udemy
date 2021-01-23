'use strict';

// coding challenge #1
// first data set
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];

// second data set
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliasDogs = dogsJulia.slice();

  juliasDogs.splice(0, 1);
  juliasDogs.splice(-2);

  const combinedDoggies = juliasDogs.concat(dogsKate);

  combinedDoggies.forEach(function (age, i) {
    if (age >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${age} years old 🐕!`
      );
    } else if (age < 3) {
      console.log(`Dog number ${i + 1} is a puppy 🐶!`);
    }
  });
};

// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

// coding challenge #2
const juliaData = [5, 2, 4, 1, 15, 8, 3];
const kateData = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  const humanAges = dogs
    .map(age => {
      if (age <= 2) {
        return age * 2;
      } else if (age > 2) {
        return 16 + age * 4;
      }
    })
    .filter(age => age >= 18);

  // alt map is dogs.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const ageAvg = humanAges.reduce((acc, age) => {
    return (acc += age / humanAges.length);
  }, 0);

  // alt reduce is humanAges.reduce((acc, age) => acc += age, 0) / humanAges.length

  console.log(ageAvg);
  console.log(humanAges);
};

calcAverageHumanAge(juliaData);
calcAverageHumanAge(kateData);

// coding challenge #3
// refactor of dog age functions with method chaining
const calcHumanAgesRefac = dogs =>
  dogs
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => (acc += age / arr.length));

console.log(calcHumanAgesRefac(juliaData));
console.log(calcHumanAgesRefac(kateData));

// coding challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

const checkEatingHabits = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

const dogsOkFood = dogs.filter(checkEatingHabits);
console.log(dogsOkFood);

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
