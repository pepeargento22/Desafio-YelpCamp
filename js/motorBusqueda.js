let imagenes = document.querySelectorAll('div.contenedor-imagen img');
let descripciones = document.querySelectorAll('div.elemento-campground p');
let nombres_cg = document.querySelectorAll('div.elemento-campground h3');
const lista_cg = document.createElement('ul'); /* FALTA CREAR LOS LI TMB Y QUE TODO SE LE APLIQUE EL APPEND */
const elems_cg = [];
let contenedor_cg = document.querySelector('.contenedor-busqueda');
let input_barra = document.querySelector('.barra-busqueda');

/* Agrego la lista de los campgrounds al documento */
contenedor_cg.appendChild(lista_cg);
for (i=0; i < nombres_cg.length; i++) {
    elems_cg[i] = document.createElement('li');
    elems_cg[i].textContent = nombres_cg[i].textContent;
    lista_cg.appendChild(elems_cg[i]);
}

/* funciones para el ajuste de altura */
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

/* con este evento funciona el autocomplete del buscador */ 
input_barra.addEventListener('keyup', function() {
    let texto = input_barra.value.toLowerCase();
    elems_cg.forEach(li => {
        if((li.style.display == 'block' && li.textContent.toLowerCase().includes(texto) == false) || (texto.length == '0')) {
            li.style.display = 'none';
        }
        if(li.textContent.toLowerCase().includes(texto) && texto.length > 0) {
            li.style.display = 'block';
        }
    })
})

/* TENGO QUE MOVER LA UL PARA EL CASO DE >500PX */

/* FALTA AGREGAR EVENTO ONCLICK A LOS LI Y AL BOTON DE SEARCH
PARA QUE QUEDE EL CAMPGROUND QUE BUSCAMOS O TIRE QUE NO ENCONTRO NADA */

