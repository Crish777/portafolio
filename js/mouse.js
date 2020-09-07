// Objeto con las propiedades del Mouse
let pMouse = {
    zona: document.querySelector('.skills-mouse-cris ul'),
    li: document.querySelectorAll('.skills-mouse-cris ul li'),
    mouseX: 0,
    mouseY: 0

}

// Objeto con los métodos del Mouse

let mMouse = {
    inicioMouse: () => {
        pMouse.zona.addEventListener('mouseenter', mMouse.mostrarHabilidades);
        pMouse.zona.addEventListener('mouseleave', mMouse.ocultarHabilidades);
    },
    mostrarHabilidades: () => {

        for (let i = 0; i < pMouse.li.length; i++) {
            pMouse.li[i].style.opacity = 1;
            pMouse.li[0].style.transition = 'all 1s';
            pMouse.li[1].style.transition = 'all 1.5s';
            pMouse.li[2].style.transition = 'all 2s';
        }
        pMouse.zona.style.opacity = 1;
    },
    ocultarHabilidades: () => {
        for (let i = 0; i < pMouse.li.length; i++) {
            pMouse.li[i].style.opacity = 0;
            pMouse.li[2].style.transition = 'all 1s';
            pMouse.li[1].style.transition = 'all 1.5s';
            pMouse.li[0].style.transition = 'all 2s';
        }
        pMouse.zona.style.opacity = 0;
        pMouse.zona.style.transition = 'all 2.5s';
    }
}

mMouse.inicioMouse();