document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.querySelector('.products-content');
    const carrito = document.querySelector('#lista-carrito tbody');
    let carritoItems = [];

    // Cargar productos desde el archivo JSON
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => mostrarProductos(productos));

    function mostrarProductos(productos) {
        productos.forEach(producto => {
            const productoHTML = `
                <div class="products-1">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h4>${producto.nombre}</h4>
                    <img src="imagenes/estrellas.png">
                    <p>$${producto.precio}</p>
                    <button class="btn-1" data-id="${producto.id}">Compra Aqui</button>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
        
        document.querySelectorAll('.btn-1').forEach(btn => {
            btn.addEventListener('click', agregarProducto);
        });
    }

    function agregarProducto(e) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        
        // Consultar producto seleccionado del JSON cargado
        fetch('productos.json')
            .then(response => response.json())
            .then(productos => {
                const producto = productos.find(item => item.id === idProducto);
                if (producto) {
                    insertarCarrito(producto);
                }
            });
    }

    function insertarCarrito(producto) {
        const existe = carritoItems.some(item => item.id === producto.id);
        
        if (existe) {
            carritoItems = carritoItems.map(item => {
                if (item.id === producto.id) {
                    item.cantidad++;
                }
                return item;
            });
        } else {
            producto.cantidad = 1;
            carritoItems.push(producto);
        }

        mostrarCarrito();
    }

    function mostrarCarrito() {
        carrito.innerHTML = '';
        carritoItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.imagen}" width="50"></td>
                <td>${item.nombre}</td>
                <td>$${item.precio}</td>
                <td>${item.cantidad}</td>
                <td><button class="eliminar-curso" data-id="${item.id}">Eliminar</button></td>
            `;
            carrito.appendChild(row);
        });

        document.querySelectorAll('.eliminar-curso').forEach(btn => {
            btn.addEventListener('click', eliminarProducto);
        });
    }

    function eliminarProducto(e) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        carritoItems = carritoItems.filter(item => item.id !== idProducto);
        mostrarCarrito();
    }

    document.querySelector('#vaciar-carrito').addEventListener('click', () => {
        carritoItems = [];
        mostrarCarrito();
    });
});
