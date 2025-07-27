const bottone = document.getElementById("btn");
const accendi = document.getElementById("yellow_lamp");
const spegni = document.getElementById("white_lamp");
accendi.style.display = "none";

bottone.addEventListener("click", function () {
    if (accendi.style.display === "none") {
        accendi.style.display = "block";
        spegni.style.display = "none";
        bottone.innerText = "Spegni"
    } else {
        accendi.style.display = "none";
        spegni.style.display = "block";
        bottone.innerText = "Accendi"
    }
}
)

//METODO DEL SRC con str.includes()

// const lamp = document.getElementById("lampadina");
// const btn = document.getElementById("btn_accendi");

// btn.addEventListener("click", function () {
//     if (lamp.src.includes("white")) {
//         lamp.src = "./img/yellow_lamp.png";
//         btn.innerText = "Spegni";
//     } else {
//         lamp.src = "./img/white_lamp.png";
//         btn.innerText = "Accendi";
//     }
// });

