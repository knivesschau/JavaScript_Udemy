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

checkDogs(julia1, kate1);
checkDogs(julia2, kate2);
