
function Producto(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

function mostrarProductos(productos) {
    console.log("Productos disponibles:");
    for (const producto of productos) {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    }
}


function buscarProductoPorId(productos, id) {
    return productos.find(producto => producto.id === id);
}


function filtrarProductosPorPrecio(productos, precioMaximo) {
    return productos.filter(producto => producto.precio <= precioMaximo);
}



function simularCompra(productos) {
    let carrito = [];

    do {
        const idProductoElegido = parseInt(prompt(`Productos disponibles:\n${productos.map(p => `${p.id}. ${p.nombre} - $${p.precio}`).join("\n")}\n\nElegí el número del producto que querés comprar:`));
        const productoElegido = buscarProductoPorId(productos, idProductoElegido);

        if (productoElegido) {
            alert(`Elegiste ${productoElegido.nombre} - $${productoElegido.precio} por unidad.`);

            const cantidad = parseInt(prompt(`¿Cuántos ${productoElegido.nombre} querés comprar?:`));

            const total = productoElegido.precio * cantidad;

            alert(`Resumen de la compra:\n${productoElegido.nombre} x ${cantidad} = $${total.toFixed(2)}`);

            
            carrito.push({
                producto: productoElegido,
                cantidad: cantidad,
                total: total
            });

            
            const agregarOtro = confirm("¿Querés agregar otro producto al carrito?");
            if (!agregarOtro) {
                break;
            }
        } else {
            
            alert("La opción ingresada no es válida. Por favor, elige un producto válido.");
        }
    } while (true);

    
    console.log("Resumen del Carrito:");
    for (const item of carrito) {
        console.log(`${item.producto.nombre} x ${item.cantidad} = $${item.total.toFixed(2)}`);
    }

    
    alert("¡Gracias por tu compra! Esperamos que disfrutes de tus productos.");

}


function iniciarSimulador() {

    const productos = [
        new Producto(1, "Apple Macbook Air M2 480GB", 2000000),
        new Producto(2, "Apple Iphone 15 128GB", 1300000),
        new Producto(3, "Apple Iphone 15 PRO 256GB", 1250000),
        new Producto(4, "Apple Ipad M2 Air 512GB", 900000),
        new Producto(5, "Apple Ipad Air Pro 1TB", 1120000),
        new Producto(6, "Apple Watch Series 7 Water R.", 509000),
        new Producto(7, "Samsung Galaxy Book Pro 360°", 1200000),
        new Producto(8, "Samsung Galaxy Book Pro", 1125000),
        new Producto(9, "Samsung Galaxy Book", 900000),
        new Producto(10, "Samsung Galaxy S23 ULTRA", 999999),
        new Producto(11, "Samsung Galaxy S23 128GB", 870000),
        new Producto(12, "Samsung Galaxy S23 FE", 540000)
    ];


    mostrarProductos(productos);


    simularCompra(productos);


    console.log("Gracias por usar el Simulador de Compras. ¡Hasta luego!");
}


iniciarSimulador();
