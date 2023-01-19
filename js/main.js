let imagen = document.querySelector('.foto');

function insertarImagen() {
    if (window.innerWidth > 1000) {
        imagen.src = 'Assets/Hero Image.jpg';
        imagen.classList.add('vertical');
    } else {
        imagen.src = 'Assets/Hero Image (Tablet and Mobile).jpg'
        imagen.classList.add('horizontal');
    }
}

window.addEventListener("resize", function() {
    if (this.window.innerWidth > 1000 && imagen.classList == 'foto horizontal') {
        imagen.classList.toggle('horizontal');
        imagen.classList.toggle('vertical');
        imagen.src = 'Assets/Hero Image.jpg';
    } else if (this.window.innerWidth <= 1000 && imagen.classList == 'foto vertical') {
        imagen.classList.toggle('vertical');
        imagen.classList.toggle('horizontal');
        imagen.src = 'Assets/Hero Image (Tablet and Mobile).jpg';
    } else {
        return
    }
});

insertarImagen();