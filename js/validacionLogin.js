let formulario = document.querySelector('form');
let input_usuario = document.getElementById('usuario');
let input_contraseña = document.getElementById('contraseña');
let error = document.querySelectorAll('.error-validacion');

let login_usuario = {
    "Username": "",
    "Password": ""
}

/* LOS USUARIOS REGISTRADOS DEBEN ESTAR EN UN JSON (TAL VEZ?) DE LA CUAL SE PODRIA CHEQUEAR QUE COINCIDAN EL USUARIO Y CONTRASEÑA.
    EN CASO DE QUE NO COINCIDA CON ALGUNO DE LOS 2 DATOS SE TIRA UN ERROR */

function loginYelpCamp() {
    /* FUNCION DE LOGIN, VOY A TENER QUE LABURAR CON EL LOCAL STORAGE Y TMB EL HISTORY PARA QUE ME MANDE A LA PAGINA DESDE LA CUAL
    QUISE HACER LOGIN */
}

function verificarUsuario(datos_usuario) {
    /* por ahi me tire error si hago "datos_usuario.Usuario" y "datos_usuario.Contraseña" */
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
                    /* function loginYelpCamp() */
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
