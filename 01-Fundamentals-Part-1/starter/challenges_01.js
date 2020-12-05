// challenge #1 and #2 
// data set #1 
let markMass = 78; 
let markHeight = 1.69;
const markBMI = Math.floor(markMass / markHeight ** 2);

let johnMass = 92;
let johnHeight = 1.95; 
const johnBMI = Math.floor(johnMass / johnHeight ** 2);

let markHigherBMI;

if (johnBMI > markBMI) {
    markHigherBMI = false; 
    console.log (`John's BMI (${johnBMI} is higher than Mark's ${markBMI})!`);
}
else {
    markHigherBMI = true; 
    console.log (`Mark's BMI (${markBMI} is higher than John's ${johnBMI})!`);
}

// challenge #3, using bonus data set #1
const dolphinScore = [97, 112, 101];
const koalaScore = [109, 95, 123];
let dolphSum = 0;
let kolSum = 0;

for (let i = 0; i < dolphinScore.length; i++) {
    dolphSum += dolphinScore[i];
}

for (let i = 0; i < koalaScore.length; i++) {
    kolSum += koalaScore[i];
}

const dolphAvg = Math.floor(dolphSum / dolphinScore.length); 
const kolAvg = Math.floor(kolSum / koalaScore.length); 

if (dolphAvg > kolAvg && dolphAvg >= 100) {
    console.log("Dolphins win!");
}
else if (kolAvg > dolphAvg && kolAvg >= 100) {
    console.log("Koalas win!");
}
else if (kolAvg === dolphAvg && kolAvg >= 100 && dolphAvg >= 100) {
    console.log("It's a tie!");
}
else {
    console.log("No one wins :(");
}

// challenge #4
const bill = 275; 
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20; 
console.log(`The bill was ${bill}, the tip was ${tip}. Overall it cost ${bill + tip}.`);