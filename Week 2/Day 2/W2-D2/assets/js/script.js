//Esercizio 1

var nome = "Antonio";
let categoria = "cliente";
const pGreco = 3.14;

document.getElementById("concatena").innerHTML = nome + ", " + categoria + ", " + pGreco;

//Esercizio 2
let concatenazione = nome + ", " + categoria + ", " + pGreco;
document.getElementById("concatena2").innerHTML = concatenazione;

//Esercizio 3
var nome1 = "Mario";
document.getElementById("var").innerHTML = nome1;
document.getElementById("final").innerHTML = nome1;
document.getElementById("let2").innerHTML = nome1;
{
  let nome1 = "Carla";
  document.getElementById("let").innerHTML = nome1;
  document.getElementById("let3").innerHTML = nome1;
  document.getElementById("final2").innerHTML = nome1;
}

//Esercizio 4
const valoreIniziale = 15;
document.getElementById("iniziale").innerHTML += " " + valoreIniziale;
let somma = valoreIniziale + valoreIniziale;
let incrementa = somma;
incrementa++;
document.getElementById("valore1").innerHTML += " " + somma + ", " + incrementa;
let sottrazione = valoreIniziale - 10;
let decrementa = sottrazione;
decrementa--;
document.getElementById("valore2").innerHTML += " " + sottrazione + ", " + decrementa;
let moltiplicazione = valoreIniziale * 3;
document.getElementById("valore3").innerHTML += " " + moltiplicazione;
let divisione = valoreIniziale / 3;
document.getElementById("valore4").innerHTML += " " + divisione;
let concat = valoreIniziale + " è un numero";
document.getElementById("valore5").innerHTML += " " + concat;
