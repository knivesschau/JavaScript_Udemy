'use strict';

// scope chain example function
function calcAge(birthYear) {
    const age = 2020 - birthYear; 

    function printAge() {
        let output = `You are ${firstName}, ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; 
            const firstName = 'Maria'; // scope chain lookup not necessary if variable is declared within block scope (create NEW variable)
            const str = `Oh, and you're a millenial ${firstName}!`;
            console.log(str);

            function add(a, b) { // block scope ES6 example, won't run outside scope 
                return a + b;
            }

            output = 'Updating the output!'; // re-assinging outer scope's variable 
        }

        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age; 
}

const firstName = 'Catrina';
calcAge(1993);