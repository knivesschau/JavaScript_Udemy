'use strict';

// default parameters exercises
const booking = [];

const bookFlight = function(flightNum, numOfPasengers = 1, price = 199 * numOfPasengers) {
    // solving with ES5 method below
    // numOfPasengers = numOfPasengers || 1; 
    // price = price || 199;

    const bookingInfo = {
        flightNum,
        numOfPasengers,
        price
    };
    
    console.log(bookingInfo);
    booking.push(bookingInfo);
};

bookFlight('PA124');
bookFlight('PA124', 5, 350);
bookFlight('PA124', 7);
bookFlight('PA124', 2);
bookFlight('PA124', undefined, 8); // bypassing a default parameter and only changing one parameter
