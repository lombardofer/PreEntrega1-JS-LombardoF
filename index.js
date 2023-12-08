const nombreUsuario = prompt("Hola! Bienvenid@ a TecnoBoutique Tienda Virtual! Por favor, indica tu nombre para que te registremos en nuestra base de datos.");

alert(`¡Hola ${nombreUsuario}! Gracias por iniciar sesión, a ccontinuación vas a poder elegir entre todos los productos de nuestro catálogo para poder comprar.`);


const productos = [
    { id: 1, nombre: "Apple Macbook Air M2 480GB", precio: 2000000 },
    { id: 2, nombre: "Apple Iphone 15 128GB", precio: 1300000 },
    { id: 3, nombre: "Apple Iphone 15 PRO 256GB", precio: 1250000 },
    { id: 4, nombre: "Apple Ipad M2 Air 512GB", precio: 900000 },
    { id: 5, nombre: "Apple Ipad Air Pro 1TB", precio: 1120000 },
    { id: 6, nombre: "Apple Watch Series 7 Water R.", precio: 509000 },
    { id: 7, nombre: "Samsung Galaxy Book Pro 360°", precio: 1200000 },
    { id: 8, nombre: "Samsung Galaxy Book Pro", precio: 1125000 },
    { id: 9, nombre: "Samsung Galaxy Book", precio: 900000 },
    { id: 10, nombre: "Samsung Galaxy S23 ULTRA", precio: 999999 },
    { id: 11, nombre: "Samsung Galaxy S23 128GB", precio: 870000 },
    { id: 12, nombre: "Samsung Galaxy S23 FE", precio: 540000 }
];

function mostrarProductos() {
    console.log("Productos que la rompen:");
    for (const producto of productos) {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    }
}

function calcularTotal(producto, cantidad) {
    return producto.precio * cantidad;
}

function despedidaPiola() {
    console.log("Gracias por ver nuestra tienda virtual, te pedimos disculpas por las molestias ocasionadas...");
}

mostrarProductos();

const listaProductos = productos.map(producto => `${producto.id}. ${producto.nombre} - $${producto.precio}`).join("\n");

const idProductoElegido = parseInt(prompt(`Acá tenés la lista de productos con sus precios:\n${listaProductos}\nElegí el número del producto que querés comprar:`));

const productoElegido = productos.find(producto => producto.id === idProductoElegido);

if (productoElegido) {

    alert(`Elegiste ${productoElegido.nombre} - $${productoElegido.precio} por unidad.`);

    const cantidad = parseInt(prompt(`¿Cuántos ${productoElegido.nombre} querés comprar?:`));

    const total = calcularTotal(productoElegido, cantidad);

    alert(`Resumen de la compra:\n${productoElegido.nombre} x ${cantidad} = $${total.toFixed(2)}`);
} else {

    alert("El producto no existe. Por favor, elegí uno que esté en la lista.");
}


alert("Disculpá, pero por ahora no podemos procesar tu compra porque estamos construyendo el sitio. ¡Volvé pronto!");

despedidaPiola();