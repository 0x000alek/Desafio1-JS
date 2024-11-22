//declaro mis variables
const precioArticulo = document.querySelector('.precio-articulo')
const cantidad = document.querySelector('.cantidad')
const precioTotal = document.querySelector('.precio-total')
const mas = document.querySelector('.mas')
const menos = document.querySelector('.menos')

//aqui le doy el valor al precio
precio = 500000
//mi variable precioArticulo debe imprimir el nombre precio
precioArticulo.innerHTML = precio

//aqui le digo a los botones que sumen y resten, y el precioTotal sea la cantidad x precioArticulo
mas.addEventListener('click', () => {
    cantidad.innerHTML++
    precioTotal.innerHTML = (cantidad.innerHTML * precioArticulo.innerHTML)
})

menos.addEventListener('click', () => {
    cantidad.innerHTML--
    precioTotal.innerHTML = (cantidad.innerHTML * precioArticulo.innerHTML)
})