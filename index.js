class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let carrito = [];

function inicializar() {
    let productos = [
        new Producto("Apple Macbook Air M2 480GB", 1250000),
        new Producto("Apple Iphone 15 128GB", 900000),
        new Producto("Apple Iphone 15 PRO 256GB", 1250000),
        new Producto("Apple Iphone 15 PRO MAX", 1469999),
        new Producto("Apple Ipad M2 Air 512GB", 869999),
        new Producto("Apple Ipad Air Pro 1TB", 1899999),
        new Producto("Apple Watch Series 7 Water R.", 719999),
        new Producto("Samsung Galaxy Book Pro 360°", 1345000),
        new Producto("Samsung Galaxy Book Pro", 1150000),
        new Producto("Samsung Galaxy Book", 750000),
        new Producto("Samsung Galaxy S23 ULTRA", 950000),
        new Producto("Samsung Galaxy S23 128GB", 820000),
        new Producto("Samsung Galaxy S23 FE", 650000),

        // Se seguirán agregando productos con imágenes y botones para la próxima pre-entrega //
    ];

    let listaProductos = document.getElementById("lista-productos");
    productos.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        let btnAgregar = document.createElement("button");
        btnAgregar.textContent = "Agregar al Carrito";
        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto);
            alert(`"${producto.nombre}" ha sido añadido al carrito.`);
        });
        li.appendChild(btnAgregar);
        listaProductos.appendChild(li);
    });

    document.getElementById("vaciar-carrito").addEventListener("click", () => {
        vaciarCarrito();
        alert("El carrito ha sido vaciado.");
    });

    actualizarCarrito();
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalElement = document.getElementById("total");

    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = calcularTotal().toFixed(2);
}

document.getElementById("noDisponible").addEventListener("click", function() {
    alert("Esta función no está disponible todavía. ¡Te invitamos a ver nuestra página de Instagram para saber cuando estaremos operativos de nuevo!");
});


inicializar();
