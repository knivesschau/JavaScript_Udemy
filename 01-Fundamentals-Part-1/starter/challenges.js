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



