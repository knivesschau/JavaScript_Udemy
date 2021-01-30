'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-01-22T23:36:17.929Z',
    '2021-01-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const timePassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysElapsed = timePassed(new Date(), date);

  if (daysElapsed === 0) return 'Today';
  if (daysElapsed === 1) return 'Yesterday';
  if (daysElapsed <= 7) return `${daysElapsed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatMov = formatCurr(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const countdown = function () {
    const min = String(Math.trunc(timer / 60)).padStart(2, 0);
    const sec = String(timer % 60).padStart(2, 0);

    // in each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when timer hits 0, stop timer and log out user
    if (timer === 0) {
      clearInterval(ticker);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // decrease by 1 sec
    timer--;
  };

  // set timer to 5 minutes
  let timer = 120;

  // call timer every second
  countdown();
  const ticker = setInterval(countdown, 1000);
  return ticker;
};

///////////////////////////////////////
// Event handlers
let currentAccount, ticker;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (ticker) {
      clearInterval(ticker);
    }
    ticker = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(ticker);
    ticker = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(ticker);
      ticker = startLogOutTimer();
    }, 2500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// converting and checking numbers exercises
// console.log(+'23'); // type coercion into number
// console.log(Number.parseInt('30px', 10)); // parsing, string MUST start with a number
// console.log(Number.parseFloat('2.5rem')); // parse floating point
// console.log(Number.isNaN(20)); // is NaN (check if its literally NaN)
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
// console.log(Number.isFinite(20)); // is finite (use to check if value is a number)
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isInteger(23)); // is integer (use to check if value is an integer)
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// math and rounding exercises
// console.log(Math.sqrt(25)); // square root
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); // cubic root

// console.log(Math.max(5, 18, 23, 11, 2)); // maximum value
// console.log(Math.max(5, 18, '23', 11, 2)); // still works!
// console.log(Math.max(5, 18, '23px', 11, 2)); // does not work!
// console.log(Math.min(5, 18, 23, 11, 2)); // min value

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // Math.PI for radius calcs

// random int between min and max constraints
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// console.log(Math.round(23.3)); // round to nearest integer
// console.log(Math.round(23.9));
// console.log(Math.ceil(23.3)); // round up to nearest integer
// console.log(Math.floor(23.9)); // round down to nearest integer
// console.log(Math.floor(-23.3));

// decimal rounding
// console.log((2.7).toFixed(0));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// remainder/modulo operator exercises
// console.log(5 % 2); // 5 = 2 * 2 + 1
// console.log(8 % 3); // 8 = 2 * 3 + 2
// console.log(6 % 2); // no remainder because it divides cleanly!
// console.log(7 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// bigInt exercises
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(30330303003030030300303030030303n); // n converts to bigInt!
// console.log(BigInt(39393933993920439210394020));
// console.log(10000n + 10000n);

// const huge = 3030050505405n; // math operators don't work on bigInt! ex. Math.sqrt
// const num = 23;
// console.log(huge * BigInt(num)); // cannot mix bigInt with normal int, have to convert int
// console.log(huge + ' is REALLY BIG!');

// console.log(10n / 3n); // cuts off decimal part for division

// dates exercises
// const now = new Date();
// console.log(now);
// console.log(new Date('December 25 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5)); // months in JS are 0 based (january is 0)!
// console.log(new Date(2037, 10, 31, 15, 23, 5)); // JS autocorrects date to next month
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // convert from days to milliseconds

// working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear()); // DO NOT USE GETYEAR
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getSeconds());
// console.log(future.getMinutes());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142285780000));
// console.log(Date.now());
// future.setFullYear(2040);
// console.log(future);

// date operations
// const daysPassed = (date1, date2) =>
//  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const daysElapsed = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(daysElapsed);
