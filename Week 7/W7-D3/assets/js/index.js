let bookshelfRef = document.getElementById("row");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let booksArray = [];
let cartRef = document.getElementById("cart");
let totalPrice = parseFloat(localStorage.getItem("total")) || 0;

fetch("http://striveschool-api.herokuapp.com/books")
  .then((res) => {
    return res.json();
  })
  .then((books) => {
    books.forEach((book) => {
      booksArray.push(book);
      let newCard = document.createElement("div");
      newCard.classList.add("col", "col-4", "col-md-3", "my-2");
      newCard.setAttribute("id", book.asin);
      newCard.innerHTML = `<div class="card">
  <img src=${book.img} class="card-img-top" alt="copertina ${book.name}">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">Category: ${book.category.toUpperCase()}</p>
    <p class="card-text">Asin: ${book.asin}</p>
    <p class="card-text b">Price: ${book.price} €</p>
    <div onclick="addCart(event)" class="btn btn-primary">ADD TO CART</div>
    <div onclick="remove(event)" class="btn btn-danger">REMOVE</div>
  </div>
</div>`;
      bookshelfRef.appendChild(newCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });

let addCart = function (event) {
  totalPrice = parseFloat(localStorage.getItem("total")) || 0;
  let cartElement = event.target.parentNode.parentNode.parentNode.getAttribute("id");
  let foundBook = booksArray.filter((book) => book.asin == cartElement);
  cart.push(foundBook[0]);
  totalPrice += parseFloat(foundBook[0].price);
  foundBook = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", totalPrice);
  print();
};

let remove = function (event) {
  event.target.parentNode.parentNode.classList.add("d-none");
};

let removeFromCart = function (event) {
  let cartArray = JSON.parse(localStorage.getItem("cart"));
  totalPrice = parseFloat(localStorage.getItem("total"));
  let cartElementId = event.target.parentNode.getAttribute("id");
  //console.log(cartElementId);
  let foundBook = cartArray.filter((book) => book.asin == cartElementId);
  let foundIndex = cartArray.indexOf(foundBook[0]);
  //console.log(cartArray);
  cartArray.splice(foundIndex, 1);
  localStorage.setItem("total", totalPrice - foundBook[0].price);
  //console.log(cartArray);
  localStorage.setItem("cart", JSON.stringify(cartArray));
  foundBook = [];
  print();
};

//console.log(JSON.parse(cart));

let print = function () {
  document.getElementById("cartTitle").innerText = `MY CART (${localStorage.getItem("total")} €)`;
  let storage = localStorage.getItem("cart");
  let cartArray = JSON.parse(storage);
  if (cartArray) {
    //console.log(cartArray);
    cartRef.innerHTML = "";
    cartArray.forEach((el) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `
    <div class="card-body text-light m-2" id=${el.asin}>
    <img src=${el.img} class="card-img-top" alt="copertina ${el.name}">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text b">Price: ${el.price} €</p>
      <div onclick="removeFromCart(event)" class="btn btn-danger mx-2">REMOVE FROM CART</div>
    </div>`;
      cartRef.appendChild(newLi);
    });
  }
};
print();
