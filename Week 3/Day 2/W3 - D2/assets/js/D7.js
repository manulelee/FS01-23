/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("Esercizio 1");

primaFunzione = (_stringa1, _stringa2) => {
  var result = _stringa1.slice(0, 2).concat(_stringa2.slice(-3));
  return console.log(result);
};

primaFunzione("ciao", "hello");

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

console.log("Esercizio 2");

secondaFunzione = (_n) => {
  var array = [];
  while (array.length < _n) {
    randomNum = Math.floor(Math.random() * 100) + 1;
    //console.log(randomNum);
    if (randomNum % 2 != 0) {
      array.push(randomNum);
    }
  }
  return console.log(array);
};

secondaFunzione(3);

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

console.log("Esercizio 3");

terzaFunzione = () => {
  var array = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      array.push(i);
    }
  }
  return console.log(array);
};

terzaFunzione();

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

console.log("Esercizio 4");

quartaFunzione = () => {
  var array = [];
  for (let i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * 101);
    array.push(randomNum);
  }
  return console.log(array);
};

quartaFunzione();

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

console.log("Esercizio 5");

quintaFunzione = (_array) => {
  var result = [];
  _array.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      result.push(parseInt(element));
    }
  });
  return console.log(result);
};

quintaFunzione([3, 4, 7, 6, 5, "2"]);

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

console.log("Esercizio 6");

sestaFunzione = (_array) => {
  var result = "";
  for (let i = 0; i < _array.length; i++) {
    result += _array[i];
  }
  return console.log(result);
};

sestaFunzione([7, 6, 8, 9, 11]);

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

console.log("Esercizio 7");

settimaFunzione = (_array) => {
  for (let i = 0; i < _array.length; i++) {
    _array[i]++;
  }
  return console.log(_array);
};

settimaFunzione([1, 2, 3, 4, 5]);

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("Esercizio 8");

ottavaFunzione = (_array) => {
  for (let i = 0; i < _array.length; i++) {
    _array[i] = _array[i].length;
  }
  return console.log(_array);
};

ottavaFunzione(["EPICODE", "is", "great"]);

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

console.log("Esercizio 9");

nonaFunzione = (_array) => {
  for (let i = 0; i < _array.length; i++) {
    if (_array[i] % 2 == 0) {
      _array.splice(i, 1);
    }
  }
  return console.log(_array);
};

nonaFunzione([3, 4, 7, 6, 5]);

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
console.log("Esercizio 10");

decimaFunzione = () => {
  var array = [];
  while (array.length < 10) {
    randomNum = Math.floor(Math.random() * 11);
    if (array.includes(randomNum)) {
      //console.log(`Il numero ${randomNum} è gia presente nell'array.`);
    } else {
      array.push(randomNum);
    }
  }
  return console.log(array);
};

decimaFunzione();

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

console.log("Esercizio 11");

undicesimaFunzione = (_array) => {
  console.log(`array prima: ${_array}`);
  _array.reverse();
  return console.log(`array dopo: ${_array}`);
};

undicesimaFunzione([1, 3, 5]);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("Esercizio 12");

dodicesimaFunzione = () => {
  var oldest = movies[0];
  movies.forEach((element) => {
    if (element.Year < oldest.Year) {
      oldest = element;
    }
  });
  return console.log(`Il film più vecchio è: ${oldest.Title} (${oldest.Year})`);
};

dodicesimaFunzione();

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("Esercizio 13");

tredicesimaFunzione = () => {
  return console.log(`Sono presenti ${movies.length} film`);
};

tredicesimaFunzione();

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("Esercizio 14");

quattordicesimaFunzione = () => {
  var titoli = [];
  movies.forEach((element) => {
    titoli.push(element.Title);
  });
  return console.log(titoli);
};

quattordicesimaFunzione();

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("Esercizio 15");

quindicesimaFunzione = () => {
  var titoli = [];
  movies.forEach((element) => {
    if (element.Year >= 2000) {
      titoli.push(element.Title);
    }
  });
  return console.log(`Film usciti dopo il 2000: ${titoli}`);
};

quindicesimaFunzione();

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const selectFilm = document.getElementById("selectFilm");
const btnRicerca = document.getElementById("ricerca");
window.addEventListener("load", function () {
  for (i = 0; i < movies.length; i++) {
    selectFilm.innerHTML += `<option value='${movies[i].imdbID}'>'${movies[i].Title}'</option>`;
  }
});

btnRicerca.addEventListener("click", function () {
  let ricerca = document.getElementById("selectFilm").value;
  let container = document.getElementById("container");
  container.style.backgroundColor = "white";
  if (ricerca == "") {
    document.getElementById("title").innerHTML = "scegli almeno un film";
    document.getElementById("Year").innerHTML = "";
    document.getElementById("imdbID").innerHTML = "";
    document.getElementById("Type").innerHTML = "";
    document.getElementById("Poster").src = "";
    return;
  } else if (ricerca !== "") {
    trova(ricerca);
    return;
  }
});

function trova(ricerca) {
  for (i = 0; i < movies.length; i++) {
    if (ricerca == movies[i].imdbID) {
      document.getElementById("title").innerHTML = `Titolo: ${movies[i].Title}`;
      document.getElementById("Year").innerHTML = `Anno: ${movies[i].Year}`;
      document.getElementById("imdbID").innerHTML = `imdb ID: ${movies[i].imdbID}`;
      document.getElementById("Type").innerHTML = `Category: ${movies[i].Type}`;
      document.getElementById("img").innerHTML = `<img src=${movies[i].Poster}" alt="poster del film">`;

      return;
    }
  }
}

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("Esercizio 17");

diciasettesimaFunzione = () => {
  let somma = 0;
  movies.forEach((element) => {
    somma += parseInt(element.Year);
  });
  return console.log(`La somma degli anni è: ${somma}`);
};

diciasettesimaFunzione();

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

const btnRicerca2 = document.getElementById("ricerca2");
var arraySearch = [];

btnRicerca2.addEventListener("click", function () {
  const search = document.getElementById("name").value.toLowerCase();
  ricerca(search);
});

function ricerca(search) {
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(search) == true) {
      arraySearch.push(movies[i]);
    }
  }
  scriviArray(arraySearch);
}

function scriviArray(arraySearch) {
  for (i = 0; i < arraySearch.length; i++) {
    document.getElementById(
      "risultati"
    ).innerHTML += `<div class="movie"> <div><h2>Titolo: ${arraySearch[i].Title}</h2><h3>Anno: ${arraySearch[i].Year}</h3><h3>IMDB ID: ${arraySearch[i].imdbID}</h3><h3>Categoria: ${arraySearch[i].Type}</h3></div><img src="${arraySearch[i].Poster}" alt="poster del fiml"></div> `;
  }
}
