
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// 1. FUNZIONE TRADIZIONALE

// DICHIARAZIONE FUNZIONE
function filterByFirstLetter(array, letter) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        if (word[0] === letter) {
            result.push(word);
        }
    }
    return result;
}

// INVOCAZIONE FUNZIONE E STAMPA
console.log(filterByFirstLetter(names, "A")); // ["Anna", "Adele", "Alessandra"]



// 2. FUNZIONE ARROW

// DICHIARAZIONE FUNZIONE ARROW
const filterByFirstLetterArrow = (array, letter) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === letter) {
            result.push(array[i]);
        }
    }
    return result;
};

// INVOCAZIONE FUNZIONE E STAMPA
console.log(filterByFirstLetterArrow(names, "A")); // ["Anna", "Adele", "Alessandra"]