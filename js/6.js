document.addEventListener("DOMContentLoaded", function () {
    fetch("productos.json")
      .then(response => response.json())
      .then(data => {
        const mainContainer = document.querySelector(".products-content");
  
        data.categorias.forEach(categoria => {
          const categoryTitle = document.createElement("h2");
          categoryTitle.textContent = categoria.nombre;
          mainContainer.appendChild(categoryTitle);
  
          categoria.productos.forEach(producto => {
            const productDiv = document.createElement("div");
            productDiv.className = "products-1";
  
            const productImg = document.createElement("img");
            productImg.src = producto.imagen;
            productImg.width = 430;
            productImg.height = 500;
  
            const productTitle = document.createElement("h4");
            productTitle.textContent = producto.nombre;
  
            const productPrice = document.createElement("p");
            productPrice.textContent = producto.precio;
  
            const productLink = document.createElement("a");
            productLink.href = "correo.html";
            productLink.className = "btn-1";
            productLink.textContent = "Compra Aqui";
  
            productDiv.appendChild(productImg);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(productLink);
  
            mainContainer.appendChild(productDiv);
          });
        });
      })
      .catch(error => console.error("Error cargando productos:", error));
  });
  