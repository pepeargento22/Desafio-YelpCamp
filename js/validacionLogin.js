let formulario = document.querySelector('form');
let input_usuario = document.getElementById('usuario');
let input_contraseña = document.getElementById('contraseña');
let error = document.querySelectorAll('.error-validacion');

let login_usuario = {
    "Username": "",
    "Password": ""
}

/* LOS USUARIOS REGISTRADOS DEBEN ESTAR EN UN JSON (TAL VEZ?) DE LA CUAL SE PODRIA CHEQUEAR QUE COINCIDAN EL USUARIO Y CONTRASEÑA.
    EN CASO DE QUE NO COINCIDA CON ALGUNO DE LOS 2 DATOS SE TIRA UN ERROR SIN ACLARAR DE CUAL PROVIENE EL ERROR */

function verificarUsuario(datos_usuario) {
    /* por ahi me tire error si hago "datos_usuario.Usuario" y "datos_usuario.Contraseña" */
    /* cargo la lista de usuarios y chequeo que alguno coincida con los datos del login */
    return fetch("js/listaUsuarios.json")
    .then(response => response.json())
    .then(lista => {
    console.log(lista);
    })
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    login_usuario.Username = input_usuario.value;
    login_usuario.Password = input_contraseña.value;
    console.log(login_usuario);
    verificarUsuario(login_usuario);
})
