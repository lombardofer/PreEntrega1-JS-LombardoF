document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();
  cargarCarrito();
});


document.getElementById('lista-productos').addEventListener('click', event => {
  if (event.target.matches('button.agregar-al-carrito')) {
    const idProducto = parseInt(event.target.dataset.id);
    agregarAlCarrito(idProducto);
  }
});

function cargarProductos() {
  fetch("../js/lista.json")
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de productos');
      }
      return response.json();
    })
    .then(data => {

      localStorage.setItem('productos', JSON.stringify(data));

      const listaProductos = document.getElementById('lista-productos');
      data.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <img src="${producto.imagen}" alt="${producto.nombre}" width="100px" height="100px">
                <h6>${producto.nombre}</h6>
                <p>$${producto.precio}</p>
                <button class="agregar-al-carrito" data-id="${producto.id}">Añadir al carrito</button>
            </div>`;
        listaProductos.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar los productos:', error);
    });
}

function agregarAlCarrito(idProducto) {
  fetch("../js/lista.json")
  .then(response => {
      if (!response.ok) {
          throw new Error('No se pudo agregar el producto al carrito');
      }
      return response.json();
  })
  .then(productos => {

      const producto = productos.find(producto => producto.id === idProducto);
      
      if (!producto) {
          throw new Error('Producto no encontrado');
      }

      Toastify({
          text: "Acabas de agregar el producto al carrito con éxito",
          className: "info",
          style: {
              background: "linear-gradient(to right, red, yellow)",
          }
      }).showToast();

      let carrito = obtenerCarrito();
      carrito.push(producto);
      guardarCarrito(carrito);
      actualizarCarritoDOM();
  })
  .catch(error => {
      console.error('Error al agregar el producto al carrito:', error);
  });
}

function cargarCarrito() {
  fetch("../lista.json")
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el carrito');
      }
      return response.json();
    })
    .then(data => {
      const listaCarrito = document.getElementById('lista-carrito');
      listaCarrito.innerHTML = '';
      data.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar el carrito:', error);
    });
}


  //  LOCAL STORAGE - FUNCIONES PARA REMOVER CARRITO, CARGARLO Y GUARDARLO PARA EL SIGUIENTE INICIO" //

  function vaciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarritoDOM();
    Toastify({
      text: "Acabas de vaciar tu carrito con éxito",
      className: "info",
      style: {
        background: "linear-gradient(to right, red, yellow)",
      }
    }).showToast();
    
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
