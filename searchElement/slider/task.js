const arrows = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");
const dotsArray = Array.from(dots);

let imageNumber = 0;

document.querySelector(".slider__arrow_next").onclick = () => swipe('next');
document.querySelector(".slider__arrow_prev").onclick = () => swipe('prev');

function swipe(number) {
    arrows[imageNumber].classList.toggle("slider__item_active");
    dotsArray[imageNumber].classList.toggle("slider__dot_active");
    if (number === "next") {
        imageNumber += 1;
        if (imageNumber === arrows.length) {
            imageNumber = 0;
        }
    } else {
        imageNumber -= 1;
        if (imageNumber < 0) {
            imageNumber = arrows.length - 1;
        }
    }
    arrows[imageNumber].classList.toggle("slider__item_active");
    dotsArray[imageNumber].classList.toggle("slider__dot_active");
}

function setDots(number) {
    arrows[imageNumber].classList.toggle("slider__item_active");
    dotsArray[imageNumber].classList.toggle("slider__dot_active");
    imageNumber = number;
    arrows[imageNumber].classList.toggle("slider__item_active");
    dotsArray[imageNumber].classList.toggle("slider__dot_active");
}

dotsArray.forEach((item) => {
    item.onclick = () => {
        activeItem = dotsArray.indexOf(item);
        setDots(activeItem);
    }
})