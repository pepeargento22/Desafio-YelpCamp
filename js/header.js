let contenedor = document.querySelector('.contenedor-menu');
let elem_logueado = document.querySelectorAll('.logueado');
let elem_deslogueado = document.querySelectorAll('.deslogueado');
let span_usuario = document.querySelectorAll('.usuario');
let boton_menu = document.querySelector('.menu-tablet');
let menu = document.querySelector('ul');
let items_menu = document.querySelectorAll('li');
let botones_logout = document.querySelectorAll('.logout');


function configurarHeader() {
    let usuario = sessionStorage.getItem("Username");
    if (usuario == null) {
        /* si no hay un usuario logueado, se quitan estos elementos */
        elem_logueado.forEach(elem => {
            elem.style.display = 'none';
        })
        for (i=0; i < 3; i+=2) {
            items_menu[i].style.display = 'none';
        }
    } else {
        /* si hay un usuario logueado, se quitan estos elementos */
        elem_deslogueado.forEach(elem => {
            elem.style.display = 'none';
        })
        for (i=3; i < 5; i++) {
            items_menu[i].style.display = 'none';
        }
        span_usuario.forEach(span => {
            span.innerText = usuario;
        })
    }
    /* una vez determinados que elementos quedan visibles, el contenedor pasa a ser visible */
    contenedor.classList.toggle('contenedor-menu');
}


document.addEventListener('load', configurarHeader());

/* Evento para hacer visible el menu al cliquear en el boton hamburguesa */
boton_menu.addEventListener('click', function(){
    menu.classList.toggle('visible');
})

/* Evento para hacer invisible el menu al cliquear fuera del mismo */
document.addEventListener('click', function(e){
    if (menu.classList.value == 'menu visible') {
        switch (e.target.classList.value) {
            case "menu-tablet":
            case "menu":
            case "item":
            case "item-usuario":
                break;
            default:
                menu.classList.toggle('visible');
                break;
        }
    }
})

/* Eventos para desloguearse de la pagina */
botones_logout.forEach(boton => {
    boton.addEventListener('click', function() {
        sessionStorage.clear();
        history.go(0);
    })
})


