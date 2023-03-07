//console.log("script collegato!");

//ESERCIZIO 12
let firstHide = document.querySelector("#firstHide");
let sales = document.querySelector("#sales div~div");
firstHide.addEventListener("click", function () {
  sales.classList.toggle("hide");
});

let secondHide = document.querySelector("#secondtHide");
let summer = document.querySelector("#summer div~div");
secondHide.addEventListener("click", function () {
  summer.classList.toggle("hide");
});

//ESERCIZIO 13
const count = function () {
  let trips = document.querySelectorAll("img");
  return console.log(`Sono presenti ${trips.length} viaggi`);
};

//ESERCIZIO 15
const toggleHot = function () {
  let imgsRef = document.querySelectorAll(".hot");
  for (let i = 0; i < imgsRef.length; i++) {
    imgsRef[i].classList.toggle("hide");
  }
};
toggleHot();

//ESERCIZIO 16
const hide = function () {
  let cardsRef = document.querySelectorAll(".card");
  for (let i = 0; i < cardsRef.length; i++) {
    cardsRef[i].remove();
  }
  //Facoltativo(?)
  let imgsRef = document.querySelectorAll("img");
  for (let i = 0; i < imgsRef.length; i++) {
    imgsRef[i].remove();
  }
};
