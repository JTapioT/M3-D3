window.onload = () => {
  // API KEY:
  const apiKey = "563492ad6f917000010000018b655e92ca224e91ba8407a1cd0c5a56";

  // EXERCISE 1:
  function showImages() {
    // FETCH IMAGES:
    fetch("https://api.pexels.com/v1/search?query=flowers", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then(responseBody => {

      console.log(responseBody.photos);

      // CONTAINER FOR IMAGES:
      let row = document.getElementById("row");

      row.innerHTML ="";

      for(let i = 0; i < responseBody.photos.length; i++) {
      console.log(responseBody.photos[i].src.medium)

      let divCard = document.createElement("div");
      divCard.className ="col-md-4";

      divCard.innerHTML = `<div class="card">
      <img src=${responseBody.photos[i].src.medium} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${responseBody.photos[i].id}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-warning hide-btn">HIDE</a>
      </div>`;
      row.appendChild(divCard);
      }
      console.log(row);

      // HIDE THE CARDS FUNCTIONALITY
      let btnHide = document.querySelectorAll(".card");
      btnHide.forEach((card) => {
        card.addEventListener("click", () => {
          card.classList.add("d-none");
        });
      });

    })
    .catch((error) => console.log(error));
    
  }

  let primaryBtn = document.querySelector(".btn-primary");
  primaryBtn.addEventListener("click", showImages);


  // EXERCISE 2.

  function showMoreImages() {
    // FETCH IMAGES:
    fetch("https://api.pexels.com/v1/search?query=forest", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((responseBody) => {
        console.log(responseBody.photos);

        // CONTAINER FOR IMAGES:
        let row = document.getElementById("row");

        row.innerHTML = "";

        for (let i = 0; i < responseBody.photos.length; i++) {
          console.log(responseBody.photos[i].src.medium);

          let divCard = document.createElement("div");
          divCard.className = "col-md-4";

          divCard.innerHTML = `<div class="card">
      <img src=${responseBody.photos[i].src.medium} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${responseBody.photos[i].id}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-warning hide-btn">HIDE</a>
      </div>`;

          row.appendChild(divCard);
        }
        console.log(row);
        // HIDE THE CARDS FUNCTIONALITY
        let btnHide = document.querySelectorAll(".card");
        console.log(btnHide);
        btnHide.forEach((card) => {
          card.addEventListener("click", () => {
            card.classList.add("d-none");
          });
        });
      })
      .catch((error) => console.log(error));
  }

  let moreImagesBtn = document.querySelector(".btn-secondary");
  moreImagesBtn.addEventListener("click", showMoreImages);


  // EXERCISE 3

/* let btn = document.querySelector(".hide-btn");
 const hideButtons = function(btn, callback){
   btn.classList.add("d-none");
  btn.forEach((card) => {
  });
  console.log(hideButtons);

  callback();
 }

 hideButtons(btn, showMoreImages); */

}




