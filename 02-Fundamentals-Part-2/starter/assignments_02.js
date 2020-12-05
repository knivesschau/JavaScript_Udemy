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

// intro to objects exercises
const myCountry = {
    country: "United States",
    capital: "Washington D.C.",
    language: "English",
    population: 328,
    neighbours: ["Canada", "Mexico"]
};

// dot vs. bracket notation exercises


// object methods exercises

// for loop exercises

// looping arrays, breaking, continuing exercises

// looping backwards and nested loops exercises

// while loops exercises

