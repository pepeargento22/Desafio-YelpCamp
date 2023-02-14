let formulario = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let errores = document.querySelectorAll('.error-validacion');

const expresiones = {
    exp_nombre_campo: /^[a-z A-Z]{4,30}$/, /* acepta espacios, letras minusculas y mayusculas entre 4 y 30 caracteres */
    exp_precio: /^[0-9]{1,6}$/ /* acepta numeros entre 1 y 6 caracteres */
}

function validarInput(i, n) {
    if (expresiones['exp_' + i.id].test(i.value)) {
        console.log(i.id + ' VALIDO!'); 
        if (errores[n].classList.value != 'error-validacion') {
            errores[n].classList.toggle('error-validacion');
            i.style.border = '0';
        }
    } else {
        console.log(i.id + ' INVALIDO');
        if (errores[n].classList.value == 'error-validacion') {
            errores[n].classList.toggle('error-validacion');
            i.style.border = '2px solid red';
        }
    }
}


/* ESTO ANDA SI NO LE PONGO PATTERN A LOS INPUTS */
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    for (j=0; j < 2; j++) {
        validarInput(inputs[j], j);
    }
})