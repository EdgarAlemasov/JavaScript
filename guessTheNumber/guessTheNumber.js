while(true) {
    let number = Math.floor(Math.random() * 1000);
    console.log(number);


    let guessNumber = prompt('The program chose a number from 0 to 999. Try to guess! Enter your choice: ');

    if (guessNumber === 'q' || guessNumber === 'quit') {
        alert('Maybe another time. Good Bye!');
        break
    } else if (isNaN(guessNumber) || (+guessNumber < 0 || +guessNumber > 999)) {
        alert('Hmm! Incorrect value. Try again!');
    } else if (guessNumber == number) {
        alert('Congratulations! You are guessed!');
        break
    } else if (guessNumber < number) {
        alert('Good try, but number is more! Try again!');
    } else if (guessNumber > number) {
        alert('Good try, but number is less! Try again!');
    }
}