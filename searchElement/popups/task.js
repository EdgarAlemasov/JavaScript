let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");

modalMain.className += " modal_active";

let element = document.querySelectorAll(".modal__close_times");
element[0].onclick = () => modalMain.className = "modal";
element[1].onclick = () => modalSuccess.className = "modal";

document.querySelector(".btn_danger").onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className +=" modal_active";
}