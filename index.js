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
      </div>`;
      

      row.appendChild(divCard);
      }
      console.log(row);
    })
    .catch((error) => console.log(error));
    
  }

  let primaryBtn = document.querySelector(".btn-primary");
  primaryBtn.addEventListener("click", showImages);


  /* 
fetch("https://api.pexels.com/v1/search?query=your-query", {
  headers: {
    Authorization: apiKey,
  },
});
<div class="col-md-4">         
<div class="card mb-4 shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
              </div>
*/
}




