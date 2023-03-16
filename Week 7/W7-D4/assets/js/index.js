const PEXELS_URL = "https://api.pexels.com/v1/search?query=";
let query1 = "Surf";
let query2 = "Dinosaurs";
let rowRef = document.querySelector("#row");
let addFirstBtn = document.getElementById("1");
let addSecondBtn = document.getElementById("2");

addFirstBtn.addEventListener("click", function () {
  rowRef.innerHTML = " ";
  getPictures(query1);
});
addSecondBtn.addEventListener("click", function () {
  rowRef.innerHTML = " ";
  getPictures(query2);
});

let hide = function (event) {
  //console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
  event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("d-none");
};
const printPics = function (pic) {
  //console.log(rowRef);
  let newCard = `<div class="col-md-4">
      <div class="card mb-4 shadow-sm">
      <img src="${pic.src.small}" alt="${pic.alt}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">Titolo:</h5>
          <p class="card-text">
            Author: ${pic.photographer} (${pic.photographer_id})<br>
            Author profile: <a href="${pic.photographer_url}">${pic.photographer_url}<a><br>
  
          (Original size: ${pic.height} x ${pic.width})<br>
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" onclick=hide(event) class="btn btn-sm btn-outline-secondary">Hide</button>
            </div>
            <small class="text-muted">pic id: ${pic.id}</small>
          </div>
        </div>
      </div>
    </div>`;
  rowRef.innerHTML += newCard;
};

let getPictures = async function (query) {
  try {
    let response = await fetch(PEXELS_URL + query, {
      method: "GET",
      headers: {
        Authorization: "G41iBLXq6Co3RV2i00SY6gBzSHbWR3BxqlboXGZVYob08lVgbA7CjtII",
      },
    });
    if (response.ok) {
      let pictures = await response.json();
      console.log(pictures);
      pictures.photos.forEach((pic) => {
        printPics(pic);
      });
    } else {
      return new Error("Errore di caricamento delle immagini");
    }
  } catch (error) {}
};
