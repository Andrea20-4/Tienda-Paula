function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : {};
}

function agregarAlCarrito(idProducto, cantidad) {
    let carrito = obtenerCarrito();
    let cant = Number(cantidad);
    if(carrito[idProducto]) {
        carrito[idProducto] += cant;
    } else {
        carrito[idProducto] = cant;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.setItem('carrito', '{}');
    
}


