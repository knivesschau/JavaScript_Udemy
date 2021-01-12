'use strict';

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
