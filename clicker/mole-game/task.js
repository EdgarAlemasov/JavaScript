let getKillNumber = document.getElementById("dead");
let getLostNumber = document.getElementById("lost");
let killCounter = 0;
let missCounter = 0;
let holes = (index) => document.getElementById(`hole${index}`);


for (let holeNumber = 1; holeNumber < 10; holeNumber++) {
    let hole = holes(holeNumber)
    hole.onclick = () => {
        if (hole.classList.contains("hole_has-mole")) {
            killCounter += 1;
        } else {
            missCounter += 1;
        }
        if (killCounter === 10) {
            alert('Победа!');
            killCounter = 0;
            missCounter = 0;
        }
        if (missCounter === 5) {
            alert('Вы проиграли!');
            killCounter = 0;
            missCounter = 0;
        }
        getKillNumber.textContent = killCounter;
        getLostNumber.textContent = missCounter;
    }

}
