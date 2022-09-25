const getTabsName = Array.from(document.querySelectorAll(".tab"));
const getTabsValue = Array.from(document.querySelectorAll(".tab__content"));
getTabsName.forEach((item) => {
    item.addEventListener('click', openContent);
})

function openContent() {
    getTabsName.forEach((item) => {
        if (item === this) {
            item.classList += ' tab_active'
        } else {
            item.classList.toggle('tab_active', false)
        }
    })
    getTabsValue.forEach((item) => {
        if (getTabsValue.indexOf(item) === getTabsName.indexOf(this)) {
            item.classList += ' tab__content_active'
        } else {
            item.classList.toggle('tab__content_active', false)
        }
    })
}