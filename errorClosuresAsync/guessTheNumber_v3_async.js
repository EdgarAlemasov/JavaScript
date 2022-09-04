
const { rejects } = require('assert');
const { resolve } = require('path');

let tryToGuess = require('readline').createInterface(process.stdin, process.stdout);
let number = Math.floor(Math.random() * 1000);
console.log(number);
console.log('The program chose a number from 0 to 999. Try to guess or text "q/quit" if you wanna leave this game!');
let try_counter = 1;
const question = require('util').promisify(tryToGuess.question).bind(tryToGuess);

async function guessTheNumber() {
    while (true) {
        let answer = await question('This is try number ' + try_counter + ' Enter your choice: ');
        let result = await checkTheNumber(answer);
        if (result === 'quit') {
            break
        } else {
            console.log(result);
        }
    }
}
guessTheNumber();


function checkTheNumber(answer) {
    return new Promise((resolve, rejects) => {
        try_counter += 1;
        if (answer === 'q' || answer === 'quit') {
            tryToGuess.close();
            console.log('Maybe another time. Good Bye!');
            resolve('quit');
        } else if (isNaN(answer) || (+answer < 0 || +answer > 999)) {
            resolve('Hmm! Incorrect value. Try again!');
        } else if (answer == number) {
            tryToGuess.close();
            console.log('Congratulations! You guessed from ' + try_counter + ' ties!');
            resolve('quit');
        } else if (answer < number) {
            resolve('Good try, but number is more! Try again!');
        } else if (answer > number) {
            resolve('Good try, but number is less! Try again!');
        }
    })
}