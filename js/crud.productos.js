const crearProducto = () => {
    let imagen = document.getElementById('imagen').value
    let marca = document.getElementById('marca').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('descripcion').value
    let productos = JSON.parse(localStorage.getItem('productos')) || []
    let array = []
    
    if(productos.length === 0){
        array.push({id: productos.length + 1, imagen, marca, precio, descripcion})
        localStorage.setItem('productos', JSON.stringify(array))
    }


}