const setValue = Array.from(document.querySelectorAll(".dropdown__value"));
const getItem = Array.from(document.querySelectorAll(".dropdown__item"));

setValue.forEach((item) => {
    item.addEventListener('click', openMenu);
})
getItem.forEach((item) => {
    item.addEventListener('click', setMainItem);
})

function openMenu(event) {
    setValue.forEach((item) => {
        if (item === this) {
            item.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
        } else {
            item.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active", false);
        }
    })
}

function setMainItem(event) {
    event.preventDefault();
    this.closest(".dropdown").querySelector(".dropdown__value").textContent = event.target.textContent;
    this.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
}