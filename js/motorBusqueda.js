let elems_cg = document.querySelectorAll('.elemento-campground');
let imagenes = document.querySelectorAll('div.contenedor-imagen img');
let descripciones = document.querySelectorAll('div.elemento-campground p');
let nombres_cg = document.querySelectorAll('div.elemento-campground h3');
const ul_cg = document.createElement('ul');
const li_cg = [];
let contenedor_cg = document.querySelector('.contenedor-busqueda');
let formulario = document.querySelector('form');
let input_barra = document.querySelector('.barra-busqueda');
let loader = document.querySelector('.loader');
let busqueda_fallida = document.querySelector('.resultado-busqueda');


/* agrego la lista de los campgrounds al documento */
contenedor_cg.appendChild(ul_cg);
for (i=0; i < nombres_cg.length; i++) {
    li_cg[i] = document.createElement('li');
    li_cg[i].textContent = nombres_cg[i].textContent;
    ul_cg.appendChild(li_cg[i]);
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

/* funcion ejecutada al cliquear el boton de busqueda */
function buscar() {
    let texto = input_barra.value.toLowerCase();
    loader.style.display = 'none';
    for (i=0; i < elems_cg.length; i++) {
        if (texto == nombres_cg[i].innerText.toLowerCase()) {
            elems_cg[i].style.display = 'block';
            return
        }
    }
    busqueda_fallida.style.display = 'block';
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
    if (ul_cg.style.display == 'none') {
        ul_cg.style.display = 'block';
    }
    li_cg.forEach(li => {
        if((li.style.display == 'block' && li.textContent.toLowerCase().includes(texto) == false) || (texto.length == '0')) {
            li.style.display = 'none';
        }
        if(li.textContent.toLowerCase().includes(texto) && texto.length > 0) {
            li.style.display = 'block';
        }
    })
})

/* evento para autocompletar el buscador con el elemento cliqueado */
li_cg.forEach(li => {
    li.addEventListener('click', function() {
        input_barra.value = li.textContent;
        ul_cg.style.display = 'none';
    })
})

/* evento que borra la lista de autocomplete al cliquear fuera de la barra */
document.addEventListener('click', function(e) {
    switch (e.target.classList.value) {
        case "barra-busqueda":
            break
        default:
            if (ul_cg.style.display = 'block') {
                ul_cg.style.display = 'none';
            }
    }
})

/* evento del buscador */
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    elems_cg.forEach(elem => {
        elem.style.display = 'none';
    })
    if (busqueda_fallida.style.display == 'block') {
        busqueda_fallida.style.display = 'none';
    }
    loader.style.display = 'block';  
    setTimeout(buscar, 2000);
})


