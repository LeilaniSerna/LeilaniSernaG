//Definimos la ruta de donde consultaremos los recursos 
const API_URL = "https://jsonplaceholder.typicode.com/";
//obtenemoa el elemento del DOM html donde arrojaremos la info
const   HTML_Response= document.querySelector("#app");

const ol= document.createElement("ol");


fetch(`${API_URL}/comments`)
      .then(response => response.json())
      .then((comments) => {
        comments.forEach((comments) => {
            
            let elem= document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${comments.postId} - ${comments.id} - ${comments.name}- ${comments.email}- ${comments.body}`)
            );
            //agregamos el nombredentro de li y denrtro del ul
                ol.appendChild(elem);
        });
        //agregamos el uldentroddel div obtenido
        HTML_Response.appendChild(ol)
      });
    