// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 2 extra");

var shoppingCart = [
  { price: 800, name: "iPhone 10", id: "0001", quantity: 3 },
  { price: 400, name: "iPad 10.3", id: "0002", quantity: 1 },
  { price: 2300, name: "MacBook Pro 16", id: "0003", quantity: 2 },
];

shoppingCartTotal = () => {
  let totalPrice = 0;
  shoppingCart.forEach((element) => {
    totalPrice += element.price * element.quantity;
  });
  return `Il totale da pagare è ${totalPrice}€.`;
};

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3 extra");

addToShoppingCart = (_price, _name, _id, _quantity) => {
  shoppingCart.push({ price: _price, name: _name, id: _id, quantity: _quantity });
  return shoppingCart.length;
};

console.log(addToShoppingCart(200, "AirPods", "0004", 1));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 4 extra");

maxShoppingCart = () => {
  let mostExpensiveProduct = {
    price: 0,
  };
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = shoppingCart[i];
    }
  }
  return mostExpensiveProduct;
};
console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10 extra");

howManyDays = (_date) => {
  let date = new Date(_date);
  let today = new Date();
  console.log(today);
  console.log(date);
  //console.log(today.getTime());
  //console.log(date.getTime());
  let millisecondsDifference = today.getTime() - date.getTime();
  //console.log(milliseconds);
  days = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24)); // conversione differenza in secondi/minuti/ore/giorni
  return `Sono passati ${days} giorni.`;
};

console.log(howManyDays("2023, 2, 1"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */