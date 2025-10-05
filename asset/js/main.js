const precio = 1195;
let unidades = 1;
let total = precio * unidades;
let stock = 6;

const preciobase = document.querySelector('#preciobase');
let preciototal = document.querySelector('#preciototal');
let cantidad = document.getElementById('cantidades');
const btnsumar = document.getElementById('sumar');
const btnrestar = document.getElementById('restar');

preciobase.innerHTML = precio;
cantidad.innerHTML = unidades;
preciototal.innerHTML = total;

btnsumar.addEventListener('click', () => {
    if (unidades == stock) return;
    unidades = unidades + 1;
    cantidad.innerHTML = unidades;
    total = precio * unidades;
    preciototal.innerHTML = total;
});
btnrestar.addEventListener('click', () => {
    if (unidades == 1) return;
    unidades = unidades - 1;
    cantidad.innerHTML = unidades;
    total = precio * unidades;
    preciototal.innerHTML = total;
});