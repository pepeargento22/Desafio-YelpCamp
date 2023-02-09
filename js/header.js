let boton_menu = document.querySelector('.menu-tablet');
let menu = document.querySelector('ul');
let itemsMenu = document.querySelectorAll('li');
let spanUsuario = document.querySelectorAll('.usuario');

/* CREO QUE VA A COMVENIR HACER UNA FUNCION QUE DETERMINE SI ESTA LOGUEADO O NO Y EN BASE A ESO DEFINA LOS DISPLAY DE LOS LI */
/* defini los display de los li, me falta testearlo y cambiarles el css que tienen */
function configurarHeader() {
    let usuario = sessionStorage.getItem("Username");
    console.log(usuario);
    console.log(itemsMenu);
    if (usuario == null) {
        for (i=0; i < 3; i+2) {
            itemsMenu[i].style.display = 'none';
        }
        return
    } else {
        for (i=3; i < 5; i++) {
            itemsMenu[i].style.display = 'none';
        }
        spanUsuario.forEach(span => {
            span.innerText = usuario;
        })
    }
}

document.addEventListener('load', configurarHeader());

boton_menu.addEventListener('click', function(){
    menu.classList.toggle('visible');
})

document.addEventListener('click', function(e){
    if (menu.classList.value == 'menu visible') {
        switch (e.target.classList.value) { //A FUTURO TENGA QUE AGREGAR MAS CASOS CUANDO TENGA EL MENU CON LOS DATOS
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