// Objeto con las propiedades del Slide
let pSlide = {
        avanzar: document.querySelector('.derecha'),
        retroceder: document.querySelector('.izquierda'),
        cajaMostrar: document.querySelectorAll('.experiencia-group'),
        numero: 0
    }
    // Objeto con los métodos del Slide

let mSlide = {
    inicioSlide: () => {
        pSlide.avanzar.addEventListener('click', mSlide.siguienteSlide);
        pSlide.retroceder.addEventListener('click', mSlide.anteriorSlide);
    },
    siguienteSlide: () => {
        pSlide.numero++;

        for (let i = 0; i < pSlide.cajaMostrar.length; i++) {
            if (pSlide.numero == 1) {
                pSlide.cajaMostrar[0].style.opacity = 0;
                pSlide.cajaMostrar[1].style.opacity = 1;
            }
            if (pSlide.numero == 2) {
                pSlide.cajaMostrar[1].style.opacity = 0;
                pSlide.cajaMostrar[2].style.opacity = 1;
            }
            if (pSlide.numero == 3) {
                pSlide.cajaMostrar[2].style.opacity = 0;
                pSlide.cajaMostrar[0].style.opacity = 1;
                pSlide.numero = 0;
            }
            pSlide.cajaMostrar[i].style.transition = 'all 1s';
        }
    },
    anteriorSlide: () => {

        if (pSlide.numero == 1 || pSlide.numero == 0) {
            pSlide.numero = 3;
        } else {
            pSlide.numero--;
        }

        for (let i = 0; i < pSlide.cajaMostrar.length; i++) {
            if (pSlide.numero == 3) {
                pSlide.cajaMostrar[0].style.opacity = 0;
                pSlide.cajaMostrar[2].style.opacity = 1;
            }
            if (pSlide.numero == 2) {
                pSlide.cajaMostrar[2].style.opacity = 0;
                pSlide.cajaMostrar[1].style.opacity = 1;
            }
            if (pSlide.numero == 1) {
                pSlide.cajaMostrar[1].style.opacity = 0;
                pSlide.cajaMostrar[0].style.opacity = 1;
                pSlide.numero = 0;
            }
            pSlide.cajaMostrar[i].style.transition = 'all 1s';
        }
    }
}

mSlide.inicioSlide();