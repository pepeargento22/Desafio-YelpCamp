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
        nombre_img.classList.add('nombre-imagen');
        nombre_img.textContent = img.name;
        contenedor_img.appendChild(nombre_img)
        let eliminar_img = document.createElement('span');
        eliminar_img.classList.add('cruz-imagen');
        eliminar_img.textContent = 'X';
        contenedor_img.appendChild(eliminar_img);

        eliminar_img.addEventListener('click', function() {
            contenedor_img.remove();
        })
    })

    /* readAsDataUrl() me lee los archivos devolviendo un objeto con la propiedad 'result' en la cual contiene el url del archivo */ 
    lector_imagenes.readAsDataURL(img);
}