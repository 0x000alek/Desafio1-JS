//declaro mis variables
const precioArticulo = document.querySelector('.precio-articulo')
const cantidad = document.querySelector('.cantidad')
const precioTotal = document.querySelector('.precio-total')
const mas = document.querySelector('.mas')
const menos = document.querySelector('.menos')
const alertaStock = document.querySelector('.alerta-stock')

//aquí se define el precio unitario del artículo
const precio = 500000
//aquí se define el total de artículos disponibles (stock)
const stock = 7
//aquì se definen los valores iniciales a mostrar en 'precioArticulo' y 'precioTtoal', en formato CLP
precioArticulo.innerHTML = formatearPrecio(precio)
precioTotal.innerHTML = formatearPrecio(0)

//aqui le digo a los botones que sumen y resten, y el precioTotal sea la cantidad x precioArticulo
mas.addEventListener('click', () => {
    //condición: si la cantidad actual de artículos es menor al stock disponible, se puede seguir sumando 1 artículo, y cálcular el precio total
    if(cantidad.innerHTML < stock) {
        cantidad.innerHTML++
        precioTotal.innerHTML = formatearPrecio(calcularPrecioTotal(cantidad.innerHTML))

        if(cantidad.innerHTML > 0) { menos.classList.remove('button-disabled') }
    }

    if(cantidad.innerHTML == stock) {
        alertaStock.innerHTML = 'Wow, has alcanzado el máximo de artículos disponibles!'
        mas.classList.add('button-disabled')
    }
})

menos.addEventListener('click', () => {
    //condición: si la cantidad actual de artículos es mayor a 0, se puede seguir restando 1 artículo, y cálcular el preccio total
    if(cantidad.innerHTML > 0) {
        cantidad.innerHTML--
        precioTotal.innerHTML = formatearPrecio(calcularPrecioTotal(cantidad.innerHTML))

        if(cantidad.innerHTML < stock) {
            alertaStock.innerHTML = ''
            mas.classList.remove('button-disabled')
        }
    }

    if(cantidad.innerHTML == 0) { menos.classList.add('button-disabled') }
})

//aquí se define una función para cálcular el precio total
function calcularPrecioTotal(cantidadArticulos) {
    return (precio * cantidadArticulos)
}

//aquí se define una función para dar formato CLP
function formatearPrecio(valor) {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(valor)
}