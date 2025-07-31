// SNACK 1
const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Trek Emonda", peso: 6.5 },
  { nome: "Cannondale SuperSix", peso: 6.9 },
  { nome: "Specialized Tarmac", peso: 6.4 }
];

// Troviamo la bici con il peso minore
let biciLeggera = biciclette[0];

for (let bici of biciclette) {
  if (bici.peso < biciLeggera.peso) { //🔹 Significa: per ogni elemento dell'array biciclette, 
                                      // crea una nuova variabile bici che, a ogni giro del ciclo, 
                                      // contiene un oggetto dell’array.
    biciLeggera = bici;
  }
}

console.log("La bici più leggera è:");
console.log(`${biciLeggera.nome} con peso di ${biciLeggera.peso} kg`);


/* ➡️ Il ciclo fa questo:

1. Inizia con la prima bici dell'array e la considera la più leggera.
2. Controlla ogni bici successiva: se trova una bici più leggera, la segna come la nuova bici più leggera.
3. Alla fine del ciclo, stampa la bici più leggera trovata.

| Giro | `bici` diventa                               |
| ---- | -------------------------------------------- |
| 1    | `{ nome: "Bianchi Oltre XR4", peso: 6.8 }`   |
| 2    | `{ nome: "Trek Emonda", peso: 6.5 }`         |
| 3    | `{ nome: "Cannondale SuperSix", peso: 6.9 }` |
| 4    | `{ nome: "Specialized Tarmac", peso: 6.4 }`  |

Alla fine, `biciLeggera` contiene la bici con il peso minore.
In questo caso, sarà "Specialized Tarmac" con 6.4 kg.  


Quindi: bici non è una variabile dichiarata prima, ma viene creata nel ciclo stesso.

🔸 Perché funziona?

bici è un oggetto (uno degli oggetti contenuti nell’array biciclette)
.peso è una proprietà dell’oggetto, già dichiarata quando abbiamo creato l’array

const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 6.8 },
  { nome: "Trek Emonda", peso: 6.5 },
  { nome: "Cannondale SuperSix", peso: 6.9 },
  { nome: "Specialized Tarmac", peso: 6.4 }
];

🔹 Ogni oggetto dentro l’array ha due proprietà:

nome: una stringa
peso: un numero

Quindi quando si scrive bici.peso, si sta dicendo:
“Prendi l’oggetto corrente (che si chiama bici) e vai a leggere il suo campo peso.”

🔸 Il valore iniziale? Viene da quella lista. Ad esempio:

Alla prima iterazione, bici.peso sarà 6.8
Alla seconda, sarà 6.5
etc.

🧠 In sintesi:
bici nasce dentro il ciclo for...of ed è uno degli oggetti dell’array.
bici.peso si riferisce a una proprietà già presente dentro quegli oggetti.
Il valore iniziale di bici.peso dipende da quale oggetto sta leggendo l’array in quel momento.

🔹 Quindi, il ciclo confronta i pesi di tutte le bici e trova quella con il peso minore.
*/