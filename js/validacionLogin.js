let cuerpo = document.querySelector('body');
let formulario = document.querySelector('form');
let input_usuario = document.getElementById('usuario');
let input_contraseña = document.getElementById('contraseña');
let error = document.querySelectorAll('.error-validacion');

let login_usuario = {
    "Username": "",
    "Password": ""
}

/* PROBLEMA DE USAR HISTORY.BACK() SI VENGO DE LA PAGINA DE REGISTRO A LA DE LOGIN O VICEVERSA, ME LLEVA A ESA PAGINA. 
PODRIA ARREGLARLO HACIENDO UN CHECK AL LOADEAR DE QUE SI ESTA LOGUEADO EN ALGUNA DE ESAS PAGINAS (CON 'sessionStorage.getItem()')
TE MANDE A BUSQUEDACAMPGROUND CON HISTORY.GO() O LOCATION.REPLACE('url') 

OTRA QUE SE ME OCURRE Y ES MEDIO GOD ES A LOS LINKS DEL LOGIN Y DEL REGISTRO QUE TE MANDAN A LA OTRA PAGINA QUE TE MANDEN 
PASANDO UNA VARIABLE POR EL SESSION STORAGE QUE SERIA UN CONTADOR QUE AUMENTA EN UNO ASI HACES HISTORY.GO(-CONTADOR) O 
ALGO POR EL ESTILO */
function loginYelpCamp(usuario) {
    /* guardo la información del usuario en el session Storage cosa de que se borre si cierran la ventana */
    sessionStorage.setItem("Username", usuario.Username);
    sessionStorage.setItem("Password", usuario.Password);
    /* utilizo history.back() para volver a la url anterior */
    history.back();
}
function verificarUsuario(datos_usuario) {
    /* cargo la lista de usuarios y chequeo que alguno coincida con los datos del login */
    return fetch("js/listaUsuarios.json")
    .then(response => response.json())
    .then(lista => {
        console.log(lista);
        for (i = 0; i < lista.length; i++) {
            /* chequeo que los usuarios coincidan */
            if (datos_usuario.Username == lista[i].Username) {
                /* hago invisible el error de validación en caso de que esté visible */
                if (error[0].classList.value != 'error-validacion') {
                    error[0].classList.toggle('error-validacion');
                    input_usuario.style.border = '0';
                }
                /* al coincidir los usuarios, chequeo que las contraseñas coincidan */
                if (datos_usuario.Password == lista[i].Password) {
                    /* hago invisible el error de validación en caso de que esté visible */
                    if (error[1].classList.value != 'error-validacion') {
                        error[1].classList.toggle('error-validacion');
                        input_contraseña.style.border = '0';
                    }
                    console.log("HAY UN MATCH!");
                    loginYelpCamp(datos_usuario);
                    break
                } else {
                    /* si la contraseña no coincide, hago visible el error de validación */
                    if (error[1].classList.value == 'error-validacion') {
                        error[1].classList.toggle('error-validacion');
                        input_contraseña.style.border = '2px solid red';
                    }
                    break    
                }
            } else {
                /* si ningun usuario coincide, al llegar al último, hago visible el error de validación */
                if (i == lista.length-1 && error[0].classList.value == 'error-validacion') {
                    error[0].classList.toggle('error-validacion');
                }
            }        
            
        };
    })
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    login_usuario.Username = input_usuario.value;
    login_usuario.Password = input_contraseña.value;
    console.log(login_usuario);
    verificarUsuario(login_usuario);
})
