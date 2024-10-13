const API_URL = "https://jsonplaceholder.typicode.com/";
const HTML_Response = document.querySelector("#app");

const tabla = document.createElement("table");

const filaEncabezado = document.createElement("tr");

const encabezados = ["ID Usuario", "ID Post", "Título", "Contenido"];
encabezados.forEach(textoEncabezado => {
  let encabezado = document.createElement("th");
  encabezado.appendChild(document.createTextNode(textoEncabezado));
  filaEncabezado.appendChild(encabezado);
});

tabla.appendChild(filaEncabezado);

fetch(`${API_URL}/posts`)
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      let fila = document.createElement("tr");

      let celdaUsuario = document.createElement("td");
      celdaUsuario.appendChild(document.createTextNode(post.userId));
      fila.appendChild(celdaUsuario);

      let celdaPost = document.createElement("td");
      celdaPost.appendChild(document.createTextNode(post.id));
      fila.appendChild(celdaPost);

      let celdaTitulo = document.createElement("td");
      celdaTitulo.appendChild(document.createTextNode(post.title));
      fila.appendChild(celdaTitulo);

      let celdaContenido = document.createElement("td");
      celdaContenido.appendChild(document.createTextNode(post.body));
      fila.appendChild(celdaContenido);

      tabla.appendChild(fila);
    });

    HTML_Response.appendChild(tabla);
  })
  .catch((error) => console.error('Error:', error));



