'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// functionality of bankist app

// display transactions
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const sortedTransactions = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  sortedTransactions.forEach(function (transaction, i) {
    const transacType = transaction > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${transacType}"> ${
      i + 1
    } ${transacType} </div>
    <div class="movements__value">${transaction}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// sort transactions
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// print bank balance
const calcBankBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => (acc += mov), 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// summary of funds
const calcFundSummary = function (acc) {
  const incomingFunds = acc.movements
    .filter(transac => transac > 0)
    .reduce((acc, transac) => (acc += transac), 0);

  labelSumIn.textContent = `${incomingFunds}€`;

  const outgoingFunds = acc.movements
    .filter(transac => transac < 0)
    .reduce((acc, transac) => (acc += transac), 0);

  labelSumOut.textContent = `${Math.abs(outgoingFunds)}€`;

  const interest = acc.movements
    .filter(transac => transac > 0)
    .map(transac => (transac * acc.interestRate) / 100)
    .filter(intrst => intrst >= 1)
    .reduce((acc, intrst) => (acc += intrst), 0);

  labelSumInterest.textContent = `${interest}€`;
};

// transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const trnsfrAmount = Number(inputTransferAmount.value);
  const receivingAcct = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    trnsfrAmount > 0 &&
    receivingAcct &&
    currentAccount.balance >= trnsfrAmount &&
    receivingAcct?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-trnsfrAmount);
    receivingAcct.movements.push(trnsfrAmount);
    updateUI(currentAccount);
  }
});

// request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// event handler for login
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

// close account event handler
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  inputClosePin.blur();
  inputCloseUsername.blur();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
});

// username generation
const createUsernames = function (users) {
  users.forEach(function (user) {
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// update UI
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcBankBalance(acc);
  calcFundSummary(acc);
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// other ways to create and fill arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const x = new Array(7);

// console.log(x);
// x.fill(1, 3, 5); // start filling values at index 3, stop at index 5
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// array.from method
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', '')) // grabbing raw elements of the transactions listed in the UI
//   );
//   console.log(movementsUI);
// });

// sort exercises
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // sort mutates the array!
// ascending order
// console.log(movements.sort((a, b) => a - b));
// descending order
// console.log(movements.sort((a, b) => b - a));

// flat + flatMap exercises
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arr.flat());
// console.log(arrDeep.flat(2)); // define the depth to grab sub-nested arrays

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(overallBalance);

// const flatMapBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (acc += mov), 0);
// console.log(flatMapBalance);

// some and every exercises
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// find exercises
// const firstWithdrawal = movements.find(transac => transac < 0);
// console.log(firstWithdrawal);

// chaining exercises
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => (acc += mov), 0);

// console.log(totalDepositsUSD);

// reduce exercises
// const balance = movements.reduce((acc, curr) => (acc += curr), 0);

// console.log(balance);

// maximum value with reduce
// const maxValue = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(maxValue);

// filter exercises
// const deposits = movements.filter(function (transaction) {
//   return transaction > 0;
// });

// const withdrawals = movements.filter(transaction => transaction < 0);

// console.log(deposits);
// console.log(withdrawals);

// map exercises
// const eurToUSD = 1.1;

// const conversion = movements.map(curr => curr * eurToUSD);
// console.log(conversion);

// const transactStr = movements.map(
//   (mov, i) =>
//     `Transaction ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(transactStr);

// forEach exercises
// forEach with maps + sets
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _value, map) {
//   console.log(`${_value}: ${value}`); // the key is the same as the value in sets!
// });

// for of loop with array
// for (const [i, transaction] of movements.entries()) {
//   if (transaction > 0) {
//     console.log(`Transaction ${i + 1}: You deposited $${transaction}`);
//   } else {
//     console.log(`Transaction ${i + 1}: You withdrew $${Math.abs(transaction)}`);
//   }
// }

// forEach solution
// movements.forEach(function (transaction, i, arr) {
//   forEach passes in the current element, index, array, etc. (in for of loops...index is first!)
//   if (transaction > 0) {
//     console.log(`Transaction ${i + 1}: You deposited $${transaction}`);
//   } else {
//     console.log(`Transaction ${i + 1}: You withdrew $${Math.abs(transaction)}`);
//   }
// });

/////////////////////////////////////////////////

// additional array methods (slice, splice, reverse, concat, join)
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // end parameter not included in output!
// console.log(arr.slice(-1)); // last element in array with slice
// console.log(arr.slice(1, -2)); // extract everything except last two elements
// console.log(arr.slice()); // shallow copy array with slice

// console.log(arr.splice(2)); // mutates original array after specified elements are extracted into new array
// arr.splice(-1);
// console.log(arr);

// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // reverse mutates original array
// console.log(arr2);

// const letters = arr.concat(arr2); // concat does not mutate original array
// console.log(letters);

// console.log(letters.join('-')); // join works similar to strings
