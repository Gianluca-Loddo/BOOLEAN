// Selezioniamo gli elementi
const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("bottone");

// Aggiungiamo un event listener al bottone
bottone.addEventListener("click", function() {
  // Verifica se la lampadina è spenta (usiamo il nome file)
  if (lampadina.src.includes("white_lamp")) {
    lampadina.src = "img/yellow_lamp.png";       // accende la lampadina
    lampadina.alt = "Lampadina accesa";
    bottone.innerHTML = "Spegni";
  } else {
    lampadina.src = "img/white_lamp.png";        // spegne la lampadina
    lampadina.alt = "Lampadina spenta";
    bottone.innerHTML = "Accendi";
  }
});
