let boton_menu = document.querySelector('.menu-tablet');
let menu = document.querySelector('ul');

/* CREO QUE VA A COMVENIR HACER UNA FUNCION QUE DETERMINE SI ESTA LOGUEADO O NO Y EN BASE A ESO DEFINA LOS DISPLAY DE LOS LI */

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