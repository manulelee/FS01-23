var schermo = document.getElementById("screen");
var cronologia = document.getElementById("cronologia");
var risultati = document.getElementById("risultati");
var beforeClick;
var deleteButton = document.getElementById("delete");

function num(_valore) {
  beforeClick = schermo.innerHTML;
  deleteButton.addEventListener("click", function () {
    schermo.innerHTML = beforeClick;
  });
  schermo.innerHTML += _valore;
}

function calc() {
  if (schermo.innerHTML == "") {
    schermo.innerHTML = "0";
  } else {
    cronologia.innerHTML = `Cronologia operazioni:`;
    risultati.innerHTML += `<li>${schermo.innerHTML} = ${eval(schermo.innerHTML)}</li>`;
    schermo.innerHTML = eval(schermo.innerHTML);
  }

  console.log(typeof schermo.innerHTML);
}

function cancel() {
  schermo.innerHTML = "";
}

function restart() {
  schermo.style.backgroundColor = "black";
  cronologia.innerHTML = ``;
  risultati.innerHTML = ``;
  document.getElementById("h1").innerText = "Restarting...";
  setTimeout(setTimeout, 2000, function () {
    cancel();
    document.getElementById("h1").innerText = "JavaScript calc_";
    schermo.style.backgroundColor = "lightgrey";
  });
}
