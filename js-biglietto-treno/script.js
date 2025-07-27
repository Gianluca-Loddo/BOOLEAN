// Attiva la modalità rigorosa di JavaScript: impedisce errori comuni, 
// ad esempio l'uso di variabili non dichiarate.
'use strict';

// 1. Prendo i riferimenti agli elementi della pagina
// document.getElementById() per prendere gli elementi HTML e poterci lavorare con JS

const inputKm = document.getElementById('km');
const inputEta = document.getElementById('eta');
const btnCalcola = document.getElementById('calcola'); // il bottone che l'utente clicca per calcolare il prezzo
const output = document.getElementById('risultato'); // il campo dove mostro il risultato

// 2. Assegno l'evento al click del bottone
// Quando l'utente clicca sul bottone, eseguo la funzione che calcola il prezzo del biglietto
// addEventListener() permette di aggiungere un evento a un elemento HTML ("click" in questo caso e lancia il codice che segue)
btnCalcola.addEventListener('click', function () {

    // 3. Prendo i valori inseriti dall'utente: 
    // .value restituisce il valore inserito in un campo di input
    // parseFloat() converte una stringa in un numero decimale, 
    // parseInt() converte una stringa in un numero intero
    const km = parseFloat(inputKm.value);
    const eta = parseInt(inputEta.value);

    // 4. Controllo che i valori siano validi
    // Controllo che km ed eta siano numeri e che siano maggiori di 0
    // isNaN() verifica se un valore non è un numero (Not-a-Number)
    // Se i valori non sono validi, mostro un messaggio di errore

    if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        output.innerText = "Inserisci valori validi per km ed età.";
        return; // Esco dalla funzione se i valori non sono validi
    }

    // 5. Calcolo il prezzo pieno
    const pricePerKm = 0.21;
    const prezzoPieno = km * pricePerKm;

    // 6. Determino lo sconto
    let sconto = 0; // Inizializzo la variabile sconto a 0

    if (eta < 18) {
        sconto = 20;
    } else if (eta > 65) {
        sconto = 40;
    }
    // Se l'età è compresa tra 18 e 65 anni, non applico sconti, quindi sconto rimane 0

    // 7. Applico lo sconto
    const prezzoFinale = prezzoPieno * (1 - sconto / 100); // Calcolo il prezzo finale applicando lo sconto

    /* 
    (1 - sconto / 100) calcola la percentuale da pagare
     
    ESEMPIO:
     prezzoPieno = 100 
     sconto = 40
     Passaggi:
     sconto / 100 = 0.4
     1 - 0.4 = 0.6
     100 * 0.6 = 60
     Prezzo scontato = 60 euro
     Hai pagato il 60% del prezzo, cioè sconto del 40%.
     */

    const prezzoArrotondato = prezzoFinale.toFixed(2); // Arrotondo il prezzo a 2 decimali per mostrare un prezzo in euro

    // 8. Mostro il risultato
    output.innerText = `Il prezzo del tuo biglietto è: €${prezzoArrotondato}`;
});
