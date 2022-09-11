let getNumber = document.getElementById("timer");
let number = Number(getNumber.textContent);

const timer = setInterval (() => {
    number -= 1;
    getNumber.textContent = number;
    if (number === 0) {
        alert("Вы Победили в конкурсе!");
        clearInterval(timer);
    }
}, 1000)
