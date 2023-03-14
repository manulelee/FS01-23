//referenze

let nameRef = document.getElementById("name");
let surnameRef = document.getElementById("surname");
let saveBtnRef = document.getElementById("save");
let resetBtnRef = document.getElementById("reset");
let ulRef = document.getElementById("list");
let themeRef = document.getElementById("theme");

let changeTheme = function () {
  let body = document.getElementById("body");
  let currentTheme = body.getAttribute("data-bs-theme");
  if (currentTheme == "light") {
    body.setAttribute("data-bs-theme", "dark");
    saveBtnRef.classList.toggle("btn-dark");
    resetBtnRef.classList.toggle("btn-dark");
    themeRef.classList.toggle("btn-dark");
    saveBtnRef.classList.toggle("btn-light");
    resetBtnRef.classList.toggle("btn-light");
    themeRef.classList.toggle("btn-light");
  } else {
    body.setAttribute("data-bs-theme", "light");
    saveBtnRef.classList.toggle("btn-dark");
    resetBtnRef.classList.toggle("btn-dark");
    themeRef.classList.toggle("btn-dark");
    saveBtnRef.classList.toggle("btn-light");
    resetBtnRef.classList.toggle("btn-light");
    themeRef.classList.toggle("btn-light");
  }
};

themeRef.onclick = changeTheme;

//Esercizio 1

let print = function () {
  if (localStorage.getItem("name") && localStorage.getItem("surname")) {
    let newLi = document.createElement("li");
    newLi.innerText = `${localStorage.getItem("name")} ${localStorage.getItem("surname")}`;
    ulRef.appendChild(newLi);
  }
};

let save = function () {
  if (nameRef.value && surnameRef.value) {
    localStorage.setItem("name", nameRef.value);
    localStorage.setItem("surname", surnameRef.value);
    print();
  } else {
    alert("Input fields required!");
  }
};

let reset = function () {
  ulRef.innerHTML = " ";
  if (localStorage.getItem("name") && localStorage.getItem("surname")) {
    localStorage.clear();
  } else {
    alert("No data in localStorage");
  }
};

print();
saveBtnRef.onclick = save;
resetBtnRef.onclick = reset;

//Esercizio 2

let timer = function () {
  let seconds = sessionStorage.getItem("seconds") || 0;
  let minute = sessionStorage.getItem("minutes") || 0;
  setInterval(function () {
    seconds++;
    sessionStorage.setItem("seconds", seconds.toString());
    if (seconds > 59) {
      seconds = 0;
      minute++;
      console.log(`${minute} minutes on this page!`);
      sessionStorage.setItem("minutes", minute.toString());
      if (minute > 4) {
        alert(`${minute} minutes!`);
      }
    }
  }, 1000);
};

timer();
