let imagenes = document.querySelectorAll('div.contenedor-imagen img');
let descripciones = document.querySelectorAll('div.elemento-campground p');
let nombres_cg = document.querySelectorAll('div.elemento-campground h3');
const lista_cg = document.createElement('ul');
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

/* con este evento aparece la lista del autocomplete del buscador */ 
input_barra.addEventListener('keyup', function() {
    let texto = input_barra.value.toLowerCase();
    if (lista_cg.style.display == 'none') {
        lista_cg.style.display = 'block';
    }
    elems_cg.forEach(li => {
        if((li.style.display == 'block' && li.textContent.toLowerCase().includes(texto) == false) || (texto.length == '0')) {
            li.style.display = 'none';
        }
        if(li.textContent.toLowerCase().includes(texto) && texto.length > 0) {
            li.style.display = 'block';
        }
    })
})

/* evento para autocompletar el buscador con el elemento cliqueado */
elems_cg.forEach(li => {
    li.addEventListener('click', function() {
        input_barra.value = li.textContent;
        lista_cg.style.display = 'none';
    })
})

document.addEventListener('click', function(e) {
    switch (e.target.classList.value) {
        /* FALTAN LOS CASES DE LOS ELEMENTOS DEL AUTOCOMPLETE */
        default:
            if (lista_cg.style.display = 'block') {
                lista_cg.style.display = 'none';
            }
    }
})

/* FALTA AGREGAR EVENTO ONCLICK AL BOTON DE SEARCH
PARA QUE QUEDE EL CAMPGROUND QUE BUSCAMOS O TIRE QUE NO ENCONTRO NADA */

