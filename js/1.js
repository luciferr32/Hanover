document.addEventListener("DOMContentLoaded", () => {
    // Cargar el JSON
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        renderHeader(data.header);
        renderMainContent(data.mainContent);
      })
      .catch(error => console.error("Error cargando los datos:", error));
  });
  
  // Función para renderizar el encabezado
  function renderHeader(headerData) {
    const headerContainer = document.querySelector('.contenedor-header');
    
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML = `<img src="${headerData.logo}" alt=""><h1>${headerData.title}</h1>`;
    
    const nav = document.createElement("nav");
    nav.id = "nav";
    
    const ul = document.createElement("ul");
    ul.classList.add("menu");
  
    headerData.menu.forEach(item => {
      const li = document.createElement("li");
      
      if (item.submenu) {
        li.innerHTML = `<a href="#">${item.name}</a>`;
        const subUl = document.createElement("ul");
        subUl.classList.add("menu-vertical");
        item.submenu.forEach(subitem => {
          const subLi = document.createElement("li");
          subLi.innerHTML = `<a href="${subitem.link}">${subitem.name}</a>`;
          subUl.appendChild(subLi);
        });
        li.appendChild(subUl);
      } else {
        li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
      }
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    headerContainer.appendChild(logo);
    headerContainer.appendChild(nav);
  }
  
  // Función para renderizar el contenido principal
  function renderMainContent(mainContentData) {
    const mainContainer = document.querySelector('main.products.container');
    
    mainContentData.forEach(section => {
      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = section.sectionTitle;
      
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("products-content");
      
      section.videos.forEach(video => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("products-1");
        
        productDiv.innerHTML = `
          <iframe width="560" height="315" src="${video.url}"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h4>${video.description}</h4>
        `;
        
        contentDiv.appendChild(productDiv);
      });
  
      mainContainer.appendChild(sectionTitle);
      mainContainer.appendChild(contentDiv);
    });
  }
  