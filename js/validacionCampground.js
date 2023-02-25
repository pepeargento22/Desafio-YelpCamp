let formulario = document.querySelector('form');
let inputs = document.querySelectorAll('input');
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
                console.log(inputs[j].id + ' VALIDO!'); 
                if (errores[j].classList.value != 'error-validacion') {
                    errores[j].classList.toggle('error-validacion');
                    inputs[j].style.border = '0';
                }
            } else {
                console.log(inputs[j].id + ' INVALIDO');
                if (errores[j].classList.value == 'error-validacion') {
                    errores[j].classList.toggle('error-validacion');
                    inputs[j].style.border = '2px solid red';
                }
                return
            }
        }
        console.log('salio todo pipicucu');
        fondo_em.style.zIndex = '2';
        ventana_em.style.zIndex = '3';
        ventana_em.style.opacity = '0.8';
    } else {
        if (errores[3].classList == 'error-validacion') {
            errores[3].classList.toggle('error-validacion');
        }
    }
})