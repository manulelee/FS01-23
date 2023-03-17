const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2NzkwNDI1MjcsImV4cCI6MTY4MDI1MjEyN30.6GzsAtuBmdchgF3K36qQJB-Rbh9rXZ-dXT20loXiKfs";

let eventId = new URLSearchParams(window.location.search).get("productId");

const getProduct = async function () {
  try {
    let response = await fetch(API_URL + eventId, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    });
    if (response.ok) {
      let prod = await response.json();
      console.log(prod);
      let rowRef = document.querySelector("main .row");
      console.log(rowRef);
      rowRef.innerHTML = `<div class="col col-8 mt-5 m-auto">
      <div class="card mb-4 shadow-sm">
      <img src="${prod.imageUrl}" alt="${prod.name} image">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">
            Brand: ${prod.brand}<br>
            Description:${prod.description}<br>
            ID: ${prod._id}
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="./index.html" class="btn btn-sm btn-outline-secondary">Go back</a>
          <a class="btn btn-sm btn-outline-secondary">Add to cart</a>
          </div>
          </div>
        </div>
      </div>
    </div>`;
    } else {
      return new Error("Problema nel recuperare i dettagli dell'evento");
    }
  } catch (error) {
    console.log(error);
  }
};
/*
let deleteButtonReference = document.getElementById("delete");
deleteButtonReference.addEventListener("click", async () => {
  let response = await fetch(API_URL + eventId, {
    method: "DELETE",
    headers: {
      Authorization: TOKEN,
    },
  });
  console.log(response);
  if (response.ok) {
    alert("EVENTO ELIMINATO CORRETTAMENTE");
    window.location.replace("./index.html");
  } else {
    alert("PROBLEMA NELL'ELIMINAZIONE DELL'EVENTO");
  }
});*/
getProduct();
