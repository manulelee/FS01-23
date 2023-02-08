/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let esercizio1 = document.getElementById("esercizio1");
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  if (a > b) {
    esercizio1.innerHTML = `${a} è maggiore di ${b}.`;
  } else if (b > a) {
    esercizio1.innerHTML = `${b} è maggiore di ${a}.`;
  } else {
    esercizio1.innerHTML = `${a} e ${b} sono uguali.`;
  }
});

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio2 = document.getElementById("esercizio2");
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  let c = document.getElementById("c").value;
  if (c !== 5) {
    esercizio2.innerHTML = `Not equal`;
  } else {
    esercizio2.innerHTML = "Equal";
  }
});

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio3 = document.getElementById("esercizio3");
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  let d = document.getElementById("d").value;
  if (d % 5 == 0) {
    esercizio3.innerHTML = "divisibile";
  } else {
    esercizio3.innerHTML = `${d} non è divisibile per 5, il resto è: ${d / 5}`;
  }
});

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio4 = document.getElementById("esercizio4");
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  let e = document.getElementById("e").value;
  let f = document.getElementById("f").value;
  if (e == 8 || f == 8) {
    esercizio4.innerHTML = `${e} o ${f} è uguale a 8`;
  } else if (e - f == 8 || e + f == 8) {
    esercizio4.innerHTML = `la somma dei due numeri è: ${e + f}, la sottrazione: ${e - f}.`;
  }
});

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio5 = document.getElementById("esercizio5");
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  let totalShoppingCartString = document.getElementById("totalShoppingCart").value;
  let totalShoppingCart = parseInt(totalShoppingCartString);
  let shipping;
  if (totalShoppingCart > 50) {
    shipping = 0;
  } else {
    shipping = 10;
  }
  esercizio5.innerHTML = `Il totale da pagare è ${totalShoppingCart + shipping}`;
});

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio6 = document.getElementById("esercizio6");
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
  let totalShoppingCartString = document.getElementById("totalShoppingCart2").value;
  let totalShoppingCart = parseInt(totalShoppingCartString);
  let newTotalShoppingCart = totalShoppingCart * 0.8;
  let shipping;
  if (newTotalShoppingCart > 50) {
    shipping = 0;
  } else {
    shipping = 10;
  }
  esercizio6.innerHTML = `BlackFriday: Il nuovo totale da pagare è ${newTotalShoppingCart + shipping}`;
});

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio7 = document.getElementById("esercizio7");
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function () {
  let g = document.getElementById("g").value;
  let h = document.getElementById("h").value;
  let i = document.getElementById("i").value;

  if (g > h && g > i) {
    if (h > i) {
      esercizio7.innerHTML = `${g}, ${h}, ${i}`;
    } else {
      esercizio7.innerHTML = `${g}, ${i}, ${h}`;
    }
  } else if (h > g && h > i) {
    if (g > i) {
      esercizio7.innerHTML = `${h}, ${g}, ${i}`;
    } else {
      esercizio7.innerHTML = `${h}, ${i}, ${g}`;
    }
  } else {
    if (g > h) {
      esercizio7.innerHTML = `${i}, ${g}, ${h}`;
    } else {
      esercizio7.innerHTML = `${i}, ${h}, ${g}`;
    }
  }
});

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio8 = document.getElementById("esercizio8");
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function () {
  let l = document.getElementById("l").value;
  if (typeof l == "number") {
    esercizio8.innerHTML = `${l} è un numero`;
  } else {
    esercizio8.innerHTML = `${l} è: ${typeof l}`;
  }
});
// il campo passato da input è string!

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio9 = document.getElementById("esercizio9");
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function () {
  let m = document.getElementById("m").value;
  m = parseInt(m);
  if (m % 2 == 0) {
    esercizio9.innerHTML = `${m} è pari.`;
  } else {
    esercizio9.innerHTML = `${m} è dispari.`;
  }
});

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio10 = document.getElementById("esercizio10");
let btn10 = document.getElementById("btn10");
btn10.addEventListener("click", function () {
  let val = document.getElementById("val").value;
  val = parseInt(val);
  if (val < 10 && val >= 5) {
    esercizio10.innerHTML = "Meno di 10";
  } else if (val < 5) {
    esercizio10.innerHTML = "Meno di 5";
  } else {
    esercizio10.innerHTML = "Uguale a 10 o maggiore";
  }
});

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio11 = document.getElementById("esercizio11");
me.city = "Toronto";
esercizio11.innerHTML = me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio12 = document.getElementById("esercizio12");
delete me.lastName;
esercizio12.innerHTML = me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio13 = document.getElementById("esercizio13");
me.skills.pop();
esercizio13.innerHTML = me.skills;

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio14 = document.getElementById("esercizio14");
let myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
esercizio14.innerHTML = myArray;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio15 = document.getElementById("esercizio15");
myArray.splice(-1, 1, 100);
esercizio15.innerHTML = myArray;
