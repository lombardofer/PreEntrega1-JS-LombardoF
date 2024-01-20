const productos = [
    { id: 1, nombre: 'Apple Macbook Air M2 480GB', precio: 2000000 },
    { id: 2, nombre: 'Apple Iphone 15 128GB', precio: 1300000 },
    { id: 3, nombre: 'Apple Iphone 15 PRO 256GB', precio: 1250000 },
    { id: 4, nombre: 'Apple Ipad M2 Air 512GB', precio: 900000 },
    { id: 5, nombre: 'Apple Ipad Air Pro 1TB', precio: 1120000 },
    { id: 6, nombre: 'Apple Watch Series 7 Water R', precio: 509000 },
    { id: 7, nombre: 'Samsung Galaxy Book Pro 360°', precio: 1200000 },
    { id: 8, nombre: 'Samsung Galaxy Book Pro', precio: 1125000 },
    { id: 9, nombre: 'Samsung Galaxy Book', precio: 900000 },
    { id: 10, nombre: 'Samsung Galaxy S23 ULTRA', precio: 999999 },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.getElementById('lista-productos');
    productos.forEach(producto => {
      const li = document.createElement('li');
      li.innerHTML = `<div>${producto.nombre} - $${producto.precio}</div><button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>`;
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
  