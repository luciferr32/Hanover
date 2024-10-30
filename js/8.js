// Cargar productos desde JSON
fetch('data.json')
.then(response => response.json())
.then(data => {
    const productsContainer = document.getElementById('products-container');
    data.products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('products-1');

        const iframe = document.createElement('iframe');
        iframe.width = 560;
        iframe.height = 315;
        iframe.src = product.videoSrc;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        const title = document.createElement('h4');
        title.innerText = product.title;

        productDiv.appendChild(iframe);
        productDiv.appendChild(title);
        productsContainer.appendChild(productDiv);
    });
})
.catch(error => console.error('Error loading JSON:', error));
