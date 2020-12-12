// functions exercises 
function describeCountry(country, population, capitalCity) {
    console.log(`The ${country} has ${population} million people and it's capital city is ${capitalCity}`);
}

describeCountry("United States", 328.2, "Washington D.C.");
describeCountry("United Kingdom", 66.65, "London");
describeCountry("Philippines", 106.7, "Manila");

// function declarations vs. expressions exercises 
function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

percentageOfWorld1(328);
percentageOfWorld1(66);
percentageOfWorld1(106);

const percentageOfWorld2 = function(population) {
    return ((population / 7900) * 100); 
}

const percUSA = percentageOfWorld2(328);
const percUK = percentageOfWorld2(66);
const percPhil = percentageOfWorld2(106);
console.log(percUSA, percUK, percPhil);

// arrow functions exercises
const percentageOfWorld3 = population => (population / 7900) * 100;
const USAperc = percentageOfWorld3(328);

console.log(USAperc);

// functions calling other functions exercises
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    console.log(`The ${country} has ${population} million people, which is about ${percentage}% of the world.`);
}

describePopulation("United States", 328);
describePopulation("United Kingdom", 66);
describePopulation("Philippines", 106);

// introduction to arrays exercises
const populations = [328, 66, 106, 258];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(328), percentageOfWorld1(66), percentageOfWorld1(106), percentageOfWorld1(258)];
console.log(percentages);

// basic array method exercises
const neighbours = ["Canada", "Mexico"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
    console.log("Not a Central European country");
}

neighbours[neighbours.indexOf("Canada")] = "Japan";
console.log(neighbours);

// intro to objects exercises + object methods exercises
const myCountry = {
    country: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 328,
    neighbours: ["Canada", "Mexico"],

    describe: function() {
        console.log(
            `The ${this.country} has ${this.population} million ${this.language}-speaking people, ${[this.neighbours.length]} neighbouring countries, and a capital
            called ${this.capital}`
        );
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        console.log(this.isIsland);
    }
};

myCountry.describe(); 
myCountry.checkIsland();

// dot vs. bracket notation exercises
console.log(`The ${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${neighbours.length} neighbouring countries,
and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] += 2; 
console.log(myCountry.population);

// for loop exercises
function voteChecker(voters) {
    for (let i = 1; i <= voters; i++) {
        console.log(`Voter number ${[i]} is currently voting.`);
    }
}

// voteChecker(50);

// looping arrays, breaking, continuing exercises
const arrPop = [328, 66, 106]; 
const arrPercs = [];

for (let i = 0; i < arrPop.length; i++) {
    const percentage = percentageOfWorld1(arrPop[i]);
    arrPercs.push(percentage);
}

console.log(percentages);

// looping backwards and nested loops exercises
const listofNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listofNeighbours.length; i++) {
    for (let j = 0; j < listofNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listofNeighbours[i][j]}`);
    }
}

// while loops exercises
const percentages3 = [];
let i = 0;

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);