/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

console.log("ESERCIZIO 1");
let myself = "Emanuele Syrbe";
console.log(myself);

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("ESERCIZIO 2");
const pets = ["dog", "cat", "hamster", "redfish", "chinchilla"];

pets.forEach((pet) => console.log(`Pet: ${pet}`));

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/

console.log("ESERCIZIO 3");
pets.push("crocodile");
console.log(`Last pet: ${pets[pets.length - 1]}`);

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

console.log("ESERCIZIO 4");
pets.pop();
console.log(`Last pet: ${pets[pets.length - 1]}`);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("ESERCIZIO 5");
pets.push(pets.shift());
console.log(pets);
console.log(`Last pet: ${pets[pets.length - 1]}`);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

console.log("ESERCIZIO 6");
pets.forEach((pet) => {
  if (pet.slice(0, 1) === "c") {
    console.log(true);
  } else {
    console.log(false);
  }
});

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("ESERCIZIO 7");
let lp = 0;
cars.forEach((car) => {
  lp++;
  car.licensePlate = `AB00${lp}CD`;
  console.log(`License plate CAR ${lp}: ${car.licensePlate}`);
});

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

console.log("ESERCIZIO 8");
const addCar = function (newCarBrand, newCarModel, newCarColor, newCarTrims, newCarLicensePlate) {
  cars.push({
    brand: newCarBrand,
    model: newCarModel,
    color: newCarColor,
    trims: newCarTrims,
    licensePlate: newCarLicensePlate,
  });
  return `Nuova lunghezza dell'array: ${cars.length}`;
};

console.log(addCar("Ford", "C-Max", "gray", ["titanium", "nonloso"], "AB111CD"));

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/

console.log("ESERCIZIO 9");
let justFirstTrims = [];
// inserisci la tua funzione qui

const addTrims = function () {
  cars.forEach((car) => {
    justFirstTrims.push(car.trims[0]);
  });
  return justFirstTrims;
};
console.log(addTrims());

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

console.log("ESERCIZIO 10");
cars.forEach((car) => {
  if (car.color.length <= 4) {
    return console.log("Fizz");
  } else {
    return console.log("Buzz");
  }
});

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

console.log("ESERCIZIO 11");

let filteredCars = cars.filter((car) => {
  return car.trims.length > 2;
});

console.log(filteredCars);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

console.log("ESERCIZIO 12");
let mappedCars = cars.map((car) => {
  return car.brand + " " + car.model;
});

console.log(mappedCars);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

console.log("ESERCIZIO 13");

let i = 0;
while (numericArray[i] !== 66) {
  console.log(`Numero ${i + 1}: ${numericArray[i]}`);
  i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["G", "n", "u", "z", "d"];

console.log("ESERCIZIO 14");
let newCharactersArray = [];
charactersArray.forEach((c) => {
  switch (c.toLowerCase()) {
    case "a":
      newCharactersArray.push(1);
      break;
    case "b":
      newCharactersArray.push(2);
      break;
    case "c":
      newCharactersArray.push(3);
      break;
    case "d":
      newCharactersArray.push(4);
      break;
    case "e":
      newCharactersArray.push(5);
      break;
    case "f":
      newCharactersArray.push(6);
      break;
    case "g":
      newCharactersArray.push(7);
      break;
    case "h":
      newCharactersArray.push(8);
      break;
    case "i":
      newCharactersArray.push(9);
      break;
    case "l":
      newCharactersArray.push(10);
      break;
    case "m":
      newCharactersArray.push(11);
      break;
    case "n":
      newCharactersArray.push(12);
      break;
    case "o":
      newCharactersArray.push(13);
      break;
    case "p":
      newCharactersArray.push(14);
      break;
    case "q":
      newCharactersArray.push(15);
      break;
    case "r":
      newCharactersArray.push(16);
      break;
    case "s":
      newCharactersArray.push(17);
      break;
    case "t":
      newCharactersArray.push(18);
      break;
    case "u":
      newCharactersArray.push(19);
      break;
    case "v":
      newCharactersArray.push(20);
      break;
    case "z":
      newCharactersArray.push(21);
      break;
  }
});
console.log(charactersArray);
console.log(newCharactersArray);
