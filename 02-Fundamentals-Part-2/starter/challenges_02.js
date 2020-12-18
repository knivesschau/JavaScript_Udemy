// coding challenge #1 
const calcAverage = (scores) => {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

const avgDolphins1 = calcAverage([44, 23, 71]); // 46
const avgKoalas1 = calcAverage([65, 54, 49]); // 56
const avgDolphins2 = calcAverage([85, 54, 41]); // 60
const avgKoalas2 = calcAverage([23, 34, 27]) // 28 

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
    else {
        console.log("No one won!");
    }
}

checkWinner(avgDolphins1, avgKoalas1); // data set 1
checkWinner(avgDolphins2, avgKoalas2); // data set 2 

// coding challenge #2
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * .15; 
    }
    else {
        return bill * .20; 
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(total);

// coding challenge #3
const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

john.calcBMI();
mark.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s BMI (${john.BMI})`);
}
else if (john.BMI > mark.BMI) {
    console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s BMI (${mark.BMI})`);
}

// coding challenge #4 
const diningBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const diningTips = [];
const totals = [];

for (let i = 0; i < diningBills.length; i++) {
    const tip = calcTip(diningBills[i]);
    diningTips.push(tip);
    totals.push(diningTips[i] + diningBills[i]);
}

console.log(diningTips);
console.log(totals);

function calcBillAvg(arr) {
    let billSum = 0;

    for (let i = 0; i < arr.length; i++) {
        billSum += arr[i];
    }

    return billSum / arr.length; 
}

console.log(calcBillAvg(totals));