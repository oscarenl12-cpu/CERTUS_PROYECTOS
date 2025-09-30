  let carrito = [];
    let total = 0;

    function agregarAlCarrito(nombre, precio) {
      let producto = carrito.find(item => item.nombre === nombre);

      if (producto) {
        producto.cantidad++;
      } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
      }

      total += precio;
      mostrarCarrito();
    }

    function eliminarDelCarrito(nombre) {
      let producto = carrito.find(item => item.nombre === nombre);

      if (producto) {
        total -= producto.precio; // restar el precio de un producto
        producto.cantidad--;

        if (producto.cantidad === 0) {
          carrito = carrito.filter(item => item.nombre !== nombre);
        }
      }

      mostrarCarrito();
    }

    function mostrarCarrito() {
      const lista = document.getElementById("lista-carrito");
      const totalElemento = document.getElementById("total");

      lista.innerHTML = "";

      carrito.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
          ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}
          <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
        `;
        lista.appendChild(li);
      });

      totalElemento.textContent = total;
    }