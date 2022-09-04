let tryToGuess = require('readline').createInterface(process.stdin, process.stdout);
let number = Math.floor(Math.random() * 1000);
console.log(number);
console.log('The program chose a number from 0 to 999. Try to guess or text "q/quit" if you wanna leave this game!');
let try_counter = 1;

function guessTheNumber() {

    tryToGuess.question('This is try number ' + try_counter + ' Enter your choice: ', (entr) => {
        try_counter += 1;
        if (entr === 'q' || entr === 'quit') {
            console.log('Maybe another time. Good Bye!');
            tryToGuess.close();
            return
        } else if (isNaN(entr) || (+entr < 0 || +entr > 999)) {
            console.log('Hmm! Incorrect value. Try again!');
        } else if (entr == number) {
            console.log('Congratulations! You guessed from ' + try_counter + ' ties!');
            tryToGuess.close();
            return
        } else if (entr < number) {
            console.log('Good try, but number is more! Try again!');
        } else if (entr > number) {
            console.log('Good try, but number is less! Try again!');
        }
        guessTheNumber();
    }) 
}

guessTheNumber();