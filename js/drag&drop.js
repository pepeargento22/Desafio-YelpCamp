let drop_area = document.querySelector('.drop-area');
let boton = drop_area.querySelector('.boton-dd');
let input = drop_area.querySelector('#archivos');
let vista_previa = document.querySelector('.preview');

/* al cliquear el boton también se cliquea el input file */
boton.addEventListener('click', function(e) {
    e.preventDefault();
    input.click();
})

/* al modificar el 'value' del input file se pasa a procesar las imagenes */
input.addEventListener('change', function(e) {
    const files = input.files;
    for (i=0; i < files.length; i++) {
        procesarImagen(files[i]);
    }
})

drop_area.addEventListener('dragenter', function() {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
})

drop_area.addEventListener('dragleave', function() {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
})

/* se crea este evento para que el evento 'drop' se pueda correr */
drop_area.addEventListener('dragover', function(e) {
    e.preventDefault();
})

drop_area.addEventListener('drop', function(e) {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
    /* declaro variable para las fotos dropeadas */
    const { files } = e.dataTransfer;
    for (i=0; i < files.length; i++) {
        procesarImagen(files[i]);
    }
})


/* chequeo que los archivos subidos tengan extension de imagen */
function validarArchivos(archivos) {
    for (i=0; i < archivos.length; i++) {
        let extensiones_validas = [ 'image/jpg', 'image/jpeg', 'image/png'];
        let extension_archivo = archivos[i].type;
        if ( extensiones_validas.includes(extension_archivo) ) {
            console.log('SON IMAGENES');
        } else {
            alert('subiste algo rancio');
            return
        }
    };
}

function procesarImagen(img) {
    const lector_imagenes = new FileReader();

    /* una vez terminado de correr readAsDataUrl(), se dispara el evento 'load' del FileReader */
    lector_imagenes.addEventListener('load', function() {
        let imagen_url = lector_imagenes.result;
        let contenedor_img = document.createElement('div');
        vista_previa.appendChild(contenedor_img);
        let elem_img = document.createElement('img');
        contenedor_img.appendChild(elem_img)
        elem_img.src = imagen_url;
        let nombre_img = document.createElement('span');
        contenedor_img.appendChild(nombre_img)
        nombre_img.textContent = img.name;
    })

    /* readAsDataUrl() me lee los archivos devolviendo un objeto con la propiedad 'result' en la cual contiene el url del archivo */ 
    lector_imagenes.readAsDataURL(img);
}

/*DESPUES HAY QUE MODIFICAR LOS ESTILOS DE ESTOS ELEMENTOS */