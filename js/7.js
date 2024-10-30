document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => renderPage(data))
        .catch(error => console.error("Error al cargar JSON:", error));
});

function renderPage(data) {
    // Render Header
    const header = document.querySelector('header');
    const logo = `<img src="${data.header.logo}" alt=""><h1>${data.header.title}</h1>`;
    header.innerHTML = `<div class="logo">${logo}</div>` + generateMenu(data.header.menu);

    // Render Main Content
    document.querySelector('.header-txt h1').textContent = data.main.headerText;
    document.querySelector('.header-txt p').textContent = data.main.description;
    document.querySelector('.btn-1').textContent = data.main.button.text;
    document.querySelector('.btn-1').href = data.main.button.link;
    document.querySelector('.header-img img').src = data.main.image;

    // Render Products
    const productsContainer = document.querySelector('.products-content');
    productsContainer.innerHTML = data.products.map(product => `
        <div class="products-1">
            <iframe width="560" height="315" src="${product.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>${product.title}</h4>
        </div>
    `).join('');
}

function generateMenu(menu) {
    return `<nav id="nav"><ul class="menu">${
        menu.map(item => {
            if (item.subMenu) {
                return `<li><a href="#">${item.name}</a><ul class="menu-vertical">${
                    item.subMenu.map(subItem => `<li><a href="${subItem.link}">${subItem.name}</a></li>`).join('')
                }</ul></li>`;
            }
            return `<li><a href="${item.link}">${item.name}</a></li>`;
        }).join('')
    }</ul></nav>`;
}
