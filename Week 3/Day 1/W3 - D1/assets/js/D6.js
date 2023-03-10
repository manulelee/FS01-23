/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

area = (l1, l2) => {
  return l1 * l2;
};

console.log(area(5, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2");

crazySum = (num1, num2) => {
  if (num1 == num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

console.log(crazySum(3, 3));
console.log(crazySum(4, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");

var num = 19;
crazyDiff = (_num) => {
  if (_num > num) {
    return (_num - num) * 3;
  } else {
    return num - _num;
  }
};

console.log(crazyDiff(1));
console.log(crazyDiff(-1));
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4");

boundary = (n) => {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n == 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(1));
console.log(boundary(400));
console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 5");

epify = (_stringa) => {
  if (_stringa.startsWith("EPICODE")) {
    return _stringa;
  }
  return `EPICODE ${_stringa}`;
};

console.log(epify("EPICODE ti saluta"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6");

check3and7 = (n) => {
  if (n % 3 == 0 && n % 7 == 0) {
    return `${n} è multiplo sia di 3 che di 7`;
  } else if (n % 3 == 0) {
    return `${n} è multiplo di 3`;
  } else if (n % 7 == 0) {
    return `${n} è multiplo di 7`;
  } else {
    return `${n} non è multiplo di 3 o 7`;
  }
};

console.log(check3and7(21));
console.log(check3and7(14));
console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("Esercizio 7");

reverseString = (_stringa) => {
  return _stringa.split("").reverse().join("");
};

console.log(reverseString("CIAO"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");

upperFirst = (_stringa) => {
  splittedWords = _stringa.split(" ");
  let finalRes = [];
  for (let i = 0; i < splittedWords.length; i++) {
    splittedLetters = splittedWords[i].split("");
    let capitalized = "";
    for (let l = 0; l < splittedLetters.length; l++) {
      if (l === 0) {
        let capitalizeFirst = splittedLetters[l].toUpperCase();
        capitalized += capitalizeFirst;
      } else {
        capitalized += splittedLetters[l];
      }
    }
    finalRes.push(capitalized + " ");
  }
  return finalRes.join("");
};

console.log(upperFirst("Ciao io sono stanco"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 9");

cutString = (_stringa) => {
  return _stringa.substring(1, _stringa.length - 1);
};
console.log(cutString("ciao a tutti"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");

giveMeRandom = (n) => {
  let myArray = [];
  for (let i = 0; i < n; i++) {
    myArray.push(Math.floor(Math.random() * 11));
  }
  return myArray;
};

console.log(giveMeRandom(2));
console.log(giveMeRandom(4));
console.log(giveMeRandom(6));
console.log(giveMeRandom(12));
