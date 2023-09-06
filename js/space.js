document.addEventListener("DOMContentLoaded", function () {
    const inputBuscar = document.getElementById("inputBuscar");
    const btnBuscar = document.getElementById("btnBuscar");
    const contenedor = document.getElementById("contenedor");
  
    btnBuscar.addEventListener("click", function () {
      const query = inputBuscar.value;
      if (query.trim() === "") {
        alert("Por favor, ingrese un término de búsqueda.");
        return;
      }
  
      // Realizar la solicitud a la API de la NASA
      const apiUrl = `https://images-api.nasa.gov/search?q=${query}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Limpiar el contenedor antes de agregar nuevas imágenes
          contenedor.innerHTML = "";
  
          // Recorrer las imágenes devueltas por la API y mostrarlas
          data.collection.items.forEach((item) => {
            const imagen = item.links[0].href;
            const titulo = item.data[0].title;
            const descripcion = item.data[0].description;
            const fecha = item.data[0].date_created;
  
            // Crear elementos HTML para mostrar la imagen y su información
            const imagenElement = document.createElement("img");
            imagenElement.src = imagen;
  
            const tituloElement = document.createElement("h2");
            tituloElement.textContent = titulo;
  
            const descripcionElement = document.createElement("p");
            descripcionElement.textContent = descripcion;
  
            const fechaElement = document.createElement("p");
            fechaElement.textContent = `Fecha: ${fecha}`;
  
            // Agregar elementos al contenedor
            contenedor.appendChild(imagenElement);
            contenedor.appendChild(tituloElement);
            contenedor.appendChild(descripcionElement);
            contenedor.appendChild(fechaElement);
          });
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    });
  });
  