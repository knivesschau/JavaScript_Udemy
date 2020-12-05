// values and variables exercises
const country = "United States of America";
const continent = "North America";
let population = 328.2;

// console.log(country);
console.log(continent);
// console.log(population);

// data types exercises
const isIsland = false;
let language; 

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const, var exercises
language = "English";
console.log(language);

// basic operator exercises + strings and template literal exercises
const splitter = population / 2; 
console.log(splitter);

console.log(population++);
console.log(population > 6);
console.log(population > 33);

const description = `The ${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

// if + else exercises
if (population > 33) {
    console.log(`The ${country}'s population is above average`);
}
else {
    console.log(`The ${country}'s population is ${33 - population} million below average`);
}

// type conversion and coercion exercises 
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// equality operator exercises
const numNeighbours = 2; 

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// }
// else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// }
// else {
//     console.log("No borders");
// }

// logical operator exercises
if (language === "English" && !isIsland && population < 50) {
    console.log(`You should live in ${country}!`);
}
else {
    console.log(`${country} does not meet your criteria :(`)
}

// switch statement exercises 
switch(language) {
    case 'Chinese':
    case 'Mandarin': 
        console.log("MOST number of native speakers!");
        break;
    
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    
    case 'English':
        console.log('3rd Place');
        break;
    
    case 'Hindi':
        console.log('Number 4');
        break;
    
    case 'Arabic': 
        console.log('5th most spoken language');
        break;

    default:
        console.log('Great language too! :D');
}

// ternary operator exercises 
console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
)