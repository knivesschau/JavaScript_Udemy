// challenge #1
function printForecast(arr) {
    let forecastStr = '';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `${arr[i]}ºC in ${i + 1} days...`;
    }
    console.log(forecastStr);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);