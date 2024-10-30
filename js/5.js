
    document.addEventListener("DOMContentLoaded", function () {
        fetch('productos.json')
            .then(response => response.json())
            .then(data => {
                const productsContainer = document.querySelector(".products-content");
                data.products.forEach(product => {
                    const productElement = document.createElement("div");
                    productElement.classList.add("products-1");
                    productElement.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h4>${product.title}</h4>
                        <p>${product.level}</p>
                        <a href="${product.link}" class="btn-1">Mas Informacion</a>
                    `;
                    productsContainer.appendChild(productElement);
                });
            })
            .catch(error => console.error("Error al cargar los productos:", error));
    });

