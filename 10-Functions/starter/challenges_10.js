'use strict';

// challenge #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answerResponse = Number(
      window.prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    console.log(answerResponse);

    typeof answerResponse === 'number' &&
      answerResponse < this.answers.length &&
      this.answers[answerResponse]++;

    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus data for challenge #1
const bonusData1 = [5, 2, 3];
const bonusData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [...bonusData1] });
poll.displayResults.call({ answers: [...bonusData2] }, 'string');

// challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// this function in the challenge works and turns the h1 blue because of the closures in the function-
// the event listener gains access to the variables in the first IIFE due to the function variables being preserved in memory.
