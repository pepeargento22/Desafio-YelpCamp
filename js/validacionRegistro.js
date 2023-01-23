let formulario = document.querySelector('form');
let input_usuario = document.getElementById('usuario');
let input_contraseña = document.getElementById('contraseña');
let error = document.querySelectorAll('.error-validacion');

/* let lista_usuarios = []; */
let usuario_nuevo = {
    "Username": '',
    "Password": ''
}

const expresion = /(?=.*[0-9])/; /* el string debe contener al menos 1 numero */

function registrarUsuario(nuevoUsuario, lista_usuarios) {
    lista_usuarios.push(nuevoUsuario);
    console.log(lista_usuarios);
    console.log('-------------');
}
function restaurarFormulario() {
    for (let i = 0; i < error.length; i++) {
        if (error[i].classList.value != 'error-validacion') {
            error[i].classList.toggle('error-validacion');
            input_usuario.style.border = '0';
            input_contraseña.style.border = '0';
        }
    }
}
function cargarListaUsuarios() {
    /* cargar pagina con Live Server de lo contrario esta funcion tira error por CORS */
    return fetch("js/listaUsuarios.json")
    .then(response => response.json())
    .then(lista => {
        console.log(lista);
        console.log('+++++++++++++');
        /* reviso que el usuario no esté repetido */
        let usuario_repetido;
        for (let j = 0; j < lista.length; j++) {
            if (lista[j].Username == usuario_nuevo.Username) {
                error[0].innerText = 'That username already exists';
                usuario_repetido = usuario_nuevo.Username;
                if (error[0].classList.value == 'error-validacion') {
                    error[0].classList.toggle('error-validacion');
                    input_usuario.style.border = '2px solid red';
                    console.log('ERROR');
                }
                break;
            }
        };
        if (usuario_nuevo.Username == usuario_repetido) {
            return console.log('tula'); /* la funcion se corta aca si ya existe el nombre de usuario */
        }
        /* una vez confirmado que el usuario no esté repetido, lo agrego a la lista de usuarios */
        registrarUsuario(usuario_nuevo, lista);
        restaurarFormulario();
        console.log('VALIDO!');
    })
    /* let xhr = new XMLHttpRequest();
    xhr.open("get", "js/listaUsuarios.json");
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            lista_usuarios = JSON.parse(xhr.response);
            console.log(lista_usuarios);
            console.log('+++++++++++++++++');
        }
    });
    xhr.send(); */
}


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let contraseña = input_contraseña.value;
    if (contraseña.length < 6) {
        error[1].innerText = 'Password must consist of at least 6 characters';
        if (error[1].classList.value == 'error-validacion') {
            error[1].classList.toggle('error-validacion');
            input_contraseña.style.border = '2px solid red';
        }
        return
    }
    if (expresion.test(contraseña)) {
        usuario_nuevo.Username = input_usuario.value;
        usuario_nuevo.Password = input_contraseña.value;
        cargarListaUsuarios();
    } else {
        error[1].innerText = 'Password must contain at least 1 number';
        if (error[1].classList.value == 'error-validacion') {
            error[1].classList.toggle('error-validacion');
            input_contraseña.style.border = '2px solid red';
        }
    }
})

/* PROBANDO COSAS DE JSON */
let objeto = JSON.parse('{"nombre": "tula", "edad": "69"}');

let objeto2 = {
    nombre: "",
    edad: ""
}

console.log(objeto2);

objeto2.nombre = "sugma";
console.log(objeto2);

let cadena = JSON.stringify(objeto2);

console.log(objeto);
console.log(cadena);
cadena.trim;
