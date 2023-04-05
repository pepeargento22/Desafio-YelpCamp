let drop_area = document.querySelector('.drop-area');
let boton = drop_area.querySelector('.boton-dd');
let input = drop_area.querySelector('#archivos');

/* al cliquear el boton también se cliquea el input file */
boton.addEventListener('click', function(e) {
    e.preventDefault();
    input.click();
})

drop_area.addEventListener('dragenter', function() {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
})

drop_area.addEventListener('dragleave', function() {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
})

drop_area.addEventListener('dragover', function(e) {
    e.preventDefault();
})


/* HACER USO DEL OBJETO FILEREADER Y VER COMO PUEDO MANDAR LA MINIATURA DE LAS FOTOS AL DIV PREVIEW */ 
drop_area.addEventListener('drop', function() {
    drop_area.classList.toggle('adentro');
    boton.classList.toggle('adentro');
    /* declaro variable para las fotos dropeadas */
    const { files } = e.dataTransfer;
})