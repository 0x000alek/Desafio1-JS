# JavaScript para la Web (G86) - Desafío 1: Calculando el total

A collaboration between Melany Menares (https://github.com/milimenares) and Alexis Olguín (https://github.com/0x000alek)

![Portada](/assets/img/portada-desafio_1-javascript-para-la-web.png "Tarjeta de Producto")

Este repositorio continene el dessarrollo de la solución propuesta para el Desafío 1 del curso **JavaScript para la Web (G86)**. El objetivo es implementar la tarjeta de un producto expuesto en una tienda online y agregar
interacción de usuario permitiendo modicar la cantidad y el valor total, por dicha cantidad de productos.

## Requerimientos

La solución propuesta, contenida en este repositorio, debe cumplir con los siguientes requerimientos solicitados para este desafio:

1. Agrega el evento de JavaScript que reacciona ante un clic en el elemento HTML que
corresponde.
2. Aplicar los querySelector() e innerHTML() de manera correcta para modicar los
elementos del DOM.
3. Implementa la lógica para modicar total a pagar en función de la cantidad.
4. Hacer funcionar los botones de + y - para aumentar y disminuir la cantidad de
productos.

## Milla Extra

### Stock y Cantidad mínima de productos

Dentro del archivo script.js se agrega la variable stock, con el objetivo de límitar la acntidad máxima de productos a ser agregados

```js
const stock = 7
```

Adicionalmente, se agregan validaciones en la lógica de los botones + y -, con el objetivo de evitar modificar los campos cantidad y precio total, cuando la cantidad de productos haya alcanzado el stock disponible, o bien haya llegado a cero

### function calcularPrecioTotal(cantidadArticulos)

Se agregar la función calcularPrecioTotal, la cual permite encapsular el cálculo del precio final, y de esta manera facilitar el uso de esta operación desde ambos botones (+ y -)

```js
function calcularPrecioTotal(cantidadArticulos) {
    return (precio * cantidadArticulos)
}
```

### function formatearPrecio(valor)

Se agrega la funcción formatearPrecio, la cual tiene como objetivo dar formato de moneda a los valores assignados para los campos de precio. Esta función da formato sólo en Pesos Chiilenos (CLP)

```js
function formatearPrecio(valor) {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(valor)
}
```

![Preview](/assets/img/demo-desafio_1-javascript-para-la-web.gif)