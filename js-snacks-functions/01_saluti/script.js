/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';




// Funzione tradizionale
function saluta(nome) {
  return "Ciao " + nome;
}
console.log(saluta(userName));



// Arrow function
const salutaArrow = (nome) => `Ciao ${nome}`;
console.log(salutaArrow(userName));





/*

//TRADIZIONALE

function saluta(nome) {
  return "Ciao " + nome;
}

const salutoTradizionale = saluta(userName);
console.log(salutoTradizionale); // ciao Mario


//ARROW FUNCTION
const salutaArrow = (nome) => `Ciao ${nome}`;
const salutoArrow = salutaArrow(userName);
console.log(salutoArrow); // ciao Mario


*/




