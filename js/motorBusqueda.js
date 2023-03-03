let imagenes = document.querySelectorAll('div.contenedor-imagen img');
let descripciones = document.querySelectorAll('div.elemento-campground p');
let nombres_cg = document.querySelectorAll('div.elemento-campground h3');
const lista_cg = document.createElement('ul'); /* FALTA CREAR LOS LI TMB Y QUE TODO SE LE APLIQUE EL APPEND */
let contenedor = document.querySelector('.contenedor-busqueda');
let formulario = document.querySelector('form');

/*  LA IDEA SERIA TENER TODOS LOS NOMBRES DE LOS CAMPGROUNDS Y CARGARLOS A UNA LISTA. DE AHI CON EL EVENTO KEYUP 
O ALGO ASI (EL QUE SE ACTIVA AL SOLTAR UNA TECLA) EN EL BUSCADOR TE SALTA EL O LOS ITEMS DE LA LISTA QUE MATCHEAN 
CON LO QUE ESCRIBIS. AL DARLE SUBMIT, TE TIRA EL ELEMENTO CON EL QUE MATCHEA EN LA PARTE DE ABAJO O TE TIRA QUE NO ENCONTRO NADA  */

function calcularAlturaMax(elementos) {
    let h_max = 0;
    elementos.forEach(elem => {
        if (elem.clientHeight > h_max) {
            h_max = elem.clientHeight;
        }
    });
    return h_max;
}

function calcularPadding(elems) {
    let altura_total = calcularAlturaMax(elems);
    let padding;
    for (i=0; i < elems.length; i++) {
        padding = altura_total - elems[i].clientHeight;
        elems[i].style.paddingBottom = padding + "px";
    }
}

/* con esto re-ajusto diferencias en altura que se puedan dar entre elementos de campgrounds por su texto y el ancho */
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 500) {
        calcularPadding(imagenes);
        calcularPadding(descripciones);
    }
});