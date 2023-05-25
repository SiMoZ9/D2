/*
    I data type primitivi ce ne sono diversi ma i fondamentali sono:

    Number:
        È un tipo di dato numerico, in poche parole è un numero.

    String:
        È una sequenza di caratteri, ci si può scrivere quello che si vuole purché sia scrtito tra le virgoletta o apici
        È importante sapere che un tipo Number e un tipo String che rappresenta un numero, sono due cose diverse:
        Il primo è un vero e proprio numero, viene interpretato dalla macchina come tale
        Il secondo è semplicamente un testo in cui c'è scritto un numero

    Boolean:
        Questo tipo di dato accetta solo valori che sono booleani: cioè solo vero o falso

    Undefined:
        Un tipo di dato che viene assegato ad una variabile quando questa non è inizializzata
        Questo valore viene assegnato ad nuova variabile dichiarata purché questa, come già detto, non sia già inizializzata

        In sostanza nessuno ha detto cosa di preciso ci sia dentro la varibile

        Per esempio se dico che ho bisogno di un po' di farina, ma di quest'ultima non ne specifico un valore, il suo valore sarà indefinito

    Null:
        A differenza di undefined, questo tipo di dato rappresenta un valore nullo
        La variabile è inizializzata ma questa ha un valore nullo, non contiene nulla

        Un esempio può essere un ciotola vuota

        let mutex = null; - La variabile mutex è inizializzata ad un valore nullo
*/

let somma = 12 + 20;

console.log(somma);

let x = 12;

let name = "Simone";

console.log(name);

let sottrazione = 4 - x;

console.log(sottrazione);

let io = {
    nome: "Simone",
    cognome: "Panci",
    hobby: "Suonare la chitarra"
};

console.log(`Nome: ${io.nome}\nCognome: ${io.cognome}\nHobby: ${io.hobby}\n`);

let name1 = "john";
let name2 = "John";

console.log(`Prima del metodo toLowerCase(): ${name1}, ${name2}`);
console.log("Il valore del confronto tra name1 e name2 è:", name1 === name2);

name2 = name2.toLowerCase();

console.log(`Dopo del metodo toLowerCase(): ${name1}, ${name2}`);
console.log("Il valore del confronto tra name1 e name2 dopo toLowerCase() è:", name1 === name2);