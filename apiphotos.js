const API_URL = "https://jsonplaceholder.typicode.com/";
const HTML_Response = document.querySelector("#app");

const divContainer = document.createElement("div");

fetch(`${API_URL}/photos`)
  .then(response => response.json())
  .then((photos) => {
    photos.forEach((photo) => {
      let photoDiv = document.createElement("div");
      let img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;
      photoDiv.appendChild(img);
      divContainer.appendChild(photoDiv);
    });
    HTML_Response.appendChild(divContainer);
  });
