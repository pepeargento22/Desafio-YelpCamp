let formulario = document.querySelector('form');
let error = document.querySelector('.error-validacion');
let fondo_em = document.querySelector('.fondo-emergente');
let ventana_em = document.querySelector('.ventana-emergente');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let check_logueado = sessionStorage.getItem("Username");
    /* chequeo que el usuario esté logueado */
    if (check_logueado != null) {
        fondo_em.style.zIndex = '2';
        ventana_em.style.zIndex = '3';
        ventana_em.style.opacity = '0.8';
    } else {
        if (error.classList == 'error-validacion') {
            error.classList.toggle('error-validacion');
        }
    }
})