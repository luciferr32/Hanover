document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('.products-content');
            data.forEach(item => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('products-1');
                productDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <a href="#" class="btn-1">Mas Informacion</a>
                `;
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
