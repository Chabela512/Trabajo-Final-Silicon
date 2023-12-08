document.addEventListener('DOMContentLoaded', mostrarCarrito);
        
        function mostrarCarrito() {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            let listaCarrito = document.getElementById('lista-carrito');

            listaCarrito.innerHTML = '';
            carrito.forEach((producto, index) => {
                let li = document.createElement('li');
                li.textContent = `${producto.nombre} - $${producto.precio}`;
       
                let botonBorrar = document.createElement('button');
                botonBorrar.textContent = 'Borrar';
                botonBorrar.addEventListener('click', () => {
                    borrarProducto(index);
                });
                li.appendChild(botonBorrar);
                
                listaCarrito.appendChild(li);
            });
        }


        function borrarProducto(index) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }

     
        function completarCompra(){
       
            alert('¡Compra completada con éxito! Gracias por su compra.');
            localStorage.removeItem('carrito'); 
            mostrarCarrito();
        }