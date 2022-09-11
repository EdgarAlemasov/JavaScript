let getNumber = document.getElementById("clicker__counter");
let number = Number(getNumber.textContent);
const getImage = document.getElementById("cookie");
let getTimeNumber = document.getElementById("time__counter");
let startTime = 0;
let endTime = 0;


// Если клик нечётный - увеличиваем картинку, при чётном уменьшаем
// getImage.onclick = () => {
//     number += 1;
//     getNumber.textContent = number;
//     if (number % 2 != 0) {
//         getImage.width += 50;
//     } else {
//         getImage.width -= 50;
//     }
// }


// Возвращает картинку к исходному размеру по таймауту
getImage.onclick = () => {
    number += 1;
    getNumber.textContent = number;
    getImage.width += 50;
    setTimeout(() => {
        getImage.width -= 50;
    }, 50)
}