//Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz
    // //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        document.writeln("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
        document.writeln("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
        document.writeln("Buzz")
    } else {
        console.log(i)
        document.writeln(i)
    }

}

//Attenzione all'ordine dei controlli IF, se scrivo prima la condizione i%3===0, se un numero è multiplo di 3 e 5 (tipo 15), il primo if lo intercetta già (perché è anche multiplo di 3), e non si arriva mai al caso FizzBuzz.
//RICORDA: Non puoi scrivere una condizione tra parentesi dopo else, puoi invece aggiungere diversi else if 