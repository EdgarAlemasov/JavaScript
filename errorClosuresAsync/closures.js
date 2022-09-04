// CLOSURES

function getPasswordChecker(password) {
    let examplePassword = password;
    return function checkPass(user_password) {
        if (user_password === examplePassword) {
            return true;
        } else {
            return false;
        }
    }
}

const check_1 = getPasswordChecker("Qw72%eeR1!")

console.log(check_1("1234fsawr"));
console.log(check_1("Qw72%eeR1!"));
console.log(check_1("4qwEr55%1"));
console.log(check_1("sd;dag&222"));
console.log(check_1("Qw72%eeR1!"));
