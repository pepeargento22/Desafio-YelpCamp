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

/* SE ME CAYO A PEDAZOS EL CODIGO ACA PERO LA IDEA ESTA */
input_barra.addEventListener('keyup', function() {
    console.log('levante el dedito jeje');
    let texto = input_barra.value;
    elems_cg.forEach(li => {
        if(li.style.display == 'block' && li.textContent.contains(texto) == false) {
            li.style.display = 'none';
        }
        if(li.textContent.contains(texto)) {
            li.style.display = 'block';
        }
    })
})