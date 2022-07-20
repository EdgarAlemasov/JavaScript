function getPrimeNumbers(n) {
    if (!getPrimeNumbers._array) {
        getPrimeNumbers._array = [];
    }

    let numbers = 2;

    while (getPrimeNumbers._array.length < n) {
        let countDivider = 0;
        for (let i = 1; i <= numbers; i++) {
            if (numbers % i === 0) {
                countDivider ++;
            }
        }

        if (countDivider === 2) {
            getPrimeNumbers._array.push(numbers);
        }

        numbers++;
    }
    return getPrimeNumbers._array;
}

console.time();
console.log(getPrimeNumbers([process.argv[2]]));
console.timeEnd();