let url = location.href;
let contadorH = sessionStorage.getItem("contador");
    
function configurarContador() {
    console.log(url);
    if (contadorH == null) {
        sessionStorage.setItem("contador", 0);
    } else {
        if (url.includes('login.html') || url.includes('registro.html')) {
            contadorH++;
            sessionStorage.setItem("contador", contadorH);
            console.log( 'dale que subeeee ' + sessionStorage.contador);
        } else {
            sessionStorage.setItem("contador", 0);
            console.log('volvemos a cero ' + sessionStorage.contador);
        }
    }
}

configurarContador();