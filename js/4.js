document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        renderHeader(data.header);
        renderMenu(data.menu);
        renderSections(data.sections);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
});

function renderHeader(header) {
    const logoDiv = document.querySelector('.logo');
    logoDiv.innerHTML = `<img src="${header.logo}" alt="Logo"><h1>${header.title}</h1>`;
}

function renderMenu(menu) {
    const nav = document.getElementById('nav');
    const ul = document.createElement('ul');
    ul.className = "menu";

    menu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href || "#";
        a.textContent = item.text;

        li.appendChild(a);

        if (item.submenu) {
            const subUl = document.createElement('ul');
            subUl.className = "menu-vertical";
            item.submenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = subItem.href;
                subA.textContent = subItem.text;
                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });
            li.appendChild(subUl);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
}

function renderSections(sections) {
    const body = document.querySelector('body');
    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = "header-content";

        sectionDiv.innerHTML = `
            <div class="header-txt">
                <h1>${section.title} <br> Gym</h1>
                <p>${section.description}</p>
                <a href="correo.html" class="btn-1">informacion</a>
            </div>
            <div class="header-img">
                <section>
                    ${section.images.map(img => `<img src="${img}" alt="${section.title} image">`).join('')}
                </section>
            </div>
        `;
        
        body.appendChild(sectionDiv);
    });
}
