 // Cargar los productos desde el archivo JSON
 fetch('productos.json')
 .then(response => response.json())
 .then(data => {
     const productsContent = document.getElementById('products-content');

     // Iterar sobre los datos y crear los elementos HTML
     data.forEach(product => {
         const productDiv = document.createElement('div');
         productDiv.className = 'products-1';

         productDiv.innerHTML = `
             <img src="${product.imagen}" height="500" width="540">
             <h4>${product.titulo}</h4>
             <p>${product.nivel}</p>
             <a href="#" class="btn-1">Mas Informacion</a>
         `;

         productsContent.appendChild(productDiv);
     });
 })
 .catch(error => console.error('Error al cargar los productos:', error));