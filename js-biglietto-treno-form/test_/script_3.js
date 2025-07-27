document.getElementById("form-biglietto").addEventListener("submit", function(event) {
  event.preventDefault();

  // input
  const nome = document.getElementById("nome").value;
  const km = parseFloat(document.getElementById("km").value);
  const eta = document.getElementById("eta").value;

  // calcolo prezzo
  const prezzoKm = 0.21;
  let prezzo = km * prezzoKm;
  let offerta = "Biglietto Standard";

  if (eta === "minorenne") {
    prezzo *= 0.8;
    offerta = "Sconto Minorenni";
  } else if (eta === "over65") {
    prezzo *= 0.6;
    offerta = "Sconto Over 65";
  }

  prezzo = prezzo.toFixed(2);

  // dati random
  const carrozza = Math.floor(Math.random() * 9) + 1;
  const codiceCP = Math.floor(10000 + Math.random() * 90000);

  // output in pagina
  document.getElementById("output-nome").innerText = nome;
  document.getElementById("output-offerta").innerText = offerta;
  document.getElementById("output-carrozza").innerText = carrozza;
  document.getElementById("output-codice").innerText = codiceCP;
  document.getElementById("output-prezzo").innerText = prezzo + "€";

  // mostra biglietto
  document.getElementById("ticket").style.display = "block";
});
