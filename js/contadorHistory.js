let url = location.href;
let contadorH = sessionStorage.getItem("contador");
    
function configurarContador() {
    if (contadorH == null) {
        sessionStorage.setItem("contador", 0);
    } else {
        if (url.includes('login.html') || url.includes('registro.html')) {
            contadorH++;
            sessionStorage.setItem("contador", contadorH);
        } else {
            sessionStorage.setItem("contador", 0);
        }
    }
}

configurarContador();