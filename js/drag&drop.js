let drop_area = document.querySelector('.drop-area');
let boton = drop_area.querySelector('button');
let input = drop_area.querySelector('#archivos');

/* al cliquear el boton también se cliquea el input file */
boton.addEventListener('click', function(e) {
    e.preventDefault();
    input.click();
})

/* LA IDEA ES QUE CON ESTOS EVENTOS HAYA UN EFECTO VISUAL DE CUANDO EL USUARIO PUEDE DROPEAR LA IMAGEN Y UNA VEZ SUBIDA QUE FIGURE
UNA MINIATURA */
drop_area.addEventListener('dragenter', function() {

})

drop_area.addEventListener('dragleave', function() {

})

drop_area.addEventListener('dragover', function() {

})

drop_area.addEventListener('drop', function() {

})