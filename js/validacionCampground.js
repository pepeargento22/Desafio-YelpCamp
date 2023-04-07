let formulario = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let contenedor_drop = document.querySelector('.drop-area');
let contenedor_imagenes = document.querySelector('.preview');
let errores = document.querySelectorAll('.error-validacion');
let fondo_em = document.querySelector('.fondo-emergente');
let ventana_em = document.querySelector('.ventana-emergente');

const expresiones = {
    exp_nombre_campo: /^[a-z A-Z]{4,30}$/, /* acepta espacios, letras minusculas y mayusculas entre 4 y 30 caracteres */
    exp_precio: /^[0-9]{1,6}$/ /* acepta numeros entre 1 y 6 caracteres */
}


/* ESTO ANDA SI NO LE PONGO PATTERN A LOS INPUTS */
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    let check_logueado = sessionStorage.getItem("Username");
    /* chequeo que el usuario esté logueado */
    if (check_logueado != null) {
        /* si está logueado, valido los inputs del formulario */
        for (j=0; j < 2; j++) {
            if (expresiones['exp_' + inputs[j].id].test(inputs[j].value)) { 
                if (errores[j].classList.value != 'error-validacion') {
                    errores[j].classList.toggle('error-validacion');
                    inputs[j].style.border = '0';
                }
            } else {
                if (errores[j].classList.value == 'error-validacion') {
                    errores[j].classList.toggle('error-validacion');
                    inputs[j].style.border = '2px solid red';
                }
                return
            }
        }
        /* validacion del drag&drop chequeando que los archivos subidos tengan extension de imagen */
        let lista_imagenes = contenedor_imagenes.querySelectorAll('.nombre-imagen');
        let lista_extensiones = []
        let extensiones_validas = [ 'jpg', 'jpeg', 'png'];
        for (i=0; i < lista_imagenes.length; i++) {
            lista_extensiones[i] = lista_imagenes[i].textContent.split('.').pop();
            if ( extensiones_validas.includes(lista_extensiones[i]) ) {
                if (errores[2].classList != 'error-validacion') {
                    errores[2].classList.toggle('error-validacion');
                    contenedor_drop.style.border = '2px dashed #dddddd';
                }
                fondo_em.style.zIndex = '2';
                ventana_em.style.zIndex = '3';
                ventana_em.style.opacity = '0.8';
            } else {
                if (errores[2].classList == 'error-validacion') {
                    errores[2].classList.toggle('error-validacion');
                    contenedor_drop.style.border = '2px dashed red';
                }
                return
            }
        };
        
    } else {
        if (errores[3].classList == 'error-validacion') {
            errores[3].classList.toggle('error-validacion');
        }
    }
})