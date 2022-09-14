const menuItem = document.querySelectorAll(".menu__item");
const menuArray = Array.from(menuItem);
let targetItem;



menuArray.forEach((item) => {
    if (item.querySelector('.menu_sub')) {
        item.querySelector('.menu__link').onclick = () => {
            targetItem = menuArray.indexOf(item);
            getSecondList();
            return false;
        }
    }
})

function getSecondList() {
    for (item of menuArray) {
        if (item.querySelector('.menu_sub') && menuArray.indexOf(item) === targetItem) {
            item.querySelector('.menu_sub').classList.toggle('menu_active');
        } else if (item.querySelector('.menu_sub') && menuArray.indexOf(item) !== targetItem) {
            item.querySelector('.menu_sub').classList.toggle('menu_active', false);
        }
    }
}