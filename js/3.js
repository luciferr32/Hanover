
    // Cargar el archivo JSON y agregar los videos a la página
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.products-content');
            data.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('products-1');
                videoElement.innerHTML = `
                    <iframe width="560" height="315" src="${video.src}" 
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h4>${video.title}</h4>
                `;
                container.appendChild(videoElement);
            });
        })
        .catch(error => console.error('Error loading the JSON file:', error));

