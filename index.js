const productos = [
  { id: 1, nombre: 'Apple Macbook Air M2 480GB', precio: 2000000, imagen: '../img/producto1.png' },
  { id: 2, nombre: 'Apple Iphone 15 128GB', precio: 1300000, imagen: '../img/producto3.png' },
  { id: 3, nombre: 'Apple Iphone 15 PRO 256GB', precio: 1250000, imagen: '../img/producto2.png' },
  { id: 4, nombre: 'Apple Ipad M2 Air 512GB', precio: 900000, imagen: '../img/producto4.png' },
  { id: 5, nombre: 'Apple Ipad Air Pro 1TB', precio: 1120000, imagen: '../img/producto5.png' },
  { id: 6, nombre: 'Apple Watch Series 7', precio: 509000, imagen: '../img/producto6.png' },
  { id: 7, nombre: 'Samsung Galaxy Book Pro 360°', precio: 1200000, imagen: '../img/producto7.png' },
  { id: 8, nombre: 'Samsung Galaxy Book Pro', precio: 1125000, imagen: '../img/producto8.png' },
  { id: 9, nombre: 'Samsung Galaxy Book 3', precio: 900000, imagen: '../img/producto10.png' },
  { id: 10, nombre: 'Samsung Galaxy S23 ULTRA', precio: 999999, imagen: '../img/producto9.png' },
  { id: 11, nombre: 'Google Home Pro', precio: 200000, imagen: '../img/producto11.png' },
  { id: 12, nombre: 'Alexa Echo Dot', precio: 130000, imagen: '../img/producto13.png' },
  { id: 13, nombre: 'JBL GO 3 SPEAKER', precio: 50000, imagen: '../img/producto12.png' },
  { id: 14, nombre: 'Apple Airpods 2dn Gen', precio: 900000, imagen: '../img/producto14.png' },

];

document.addEventListener('DOMContentLoaded', () => {
  const listaProductos = document.getElementById('lista-productos');
  productos.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <img src="${producto.imagen}" alt="${producto.nombre}" widht="100px" height="100px">
        <h6>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
      </div>`;
    listaProductos.appendChild(li);
  });

cargarCarrito();

});


  function agregarAlCarrito(idProducto) {
    let carrito = obtenerCarrito();
    const producto = productos.find(p => p.id === idProducto);
  
    if (producto) {
      carrito.push(producto);
      guardarCarrito(carrito);
      actualizarCarritoDOM();
    }
  }

  function verCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.style.display = carritoDiv.style.display === 'none' ? 'block' : 'none';
  }

  //  LOCAL STORAGE - FUNCIONES PARA REMOVER CARRITO, CARGARLO Y GUARDARLO PARA EL SIGUIENTE INICIO" //


  function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarritoDOM();
  }
  
  function cargarCarrito() {
    const carrito = obtenerCarrito();
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `${producto.nombre} - $${producto.precio}`;
      document.getElementById('lista-carrito').appendChild(li);
    });
  }
  
  function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
  }

  function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function actualizarCarritoDOM() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
  
    const carrito = obtenerCarrito();
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `${producto.nombre} - $${producto.precio}`;
      listaCarrito.appendChild(li);
    });
  }

  
  