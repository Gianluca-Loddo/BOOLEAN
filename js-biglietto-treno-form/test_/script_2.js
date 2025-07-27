document.getElementById("form-biglietto").addEventListener("submit", function(event) {
  event.preventDefault(); // blocca il refresh

  // Prendi i valori dal form
  const nome = document.getElementById("nome").value;
  const km = parseFloat(document.getElementById("km").value);
  const eta = document.getElementById("eta").value;

  // Calcolo prezzo base
  const prezzoKm = 0.21;
  let prezzo = km * prezzoKm;
  let offerta = "Biglietto Standard";

  // Applica sconto
  if (eta === "minorenne") {
    prezzo *= 0.8;
    offerta = "Sconto Minorenni";
  } else if (eta === "over65") {
    prezzo *= 0.6;
    offerta = "Sconto Over 65";
  }

  // Formatta prezzo con 2 decimali
  prezzo = prezzo.toFixed(2);

  // Stampa il risultato
  document.getElementById("output").innerHTML = `
    Nome: ${nome} <br>
    Offerta: ${offerta} <br>
    Prezzo: ${prezzo} €
  `;
});
