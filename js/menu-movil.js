// Objeto con las propiedades del menú
let pMenu = {
    menuMovil: document.querySelectorAll('.barra .logo span'),
    navegacion: document.querySelector('.barra nav'),
    botonera: document.querySelectorAll('.barra nav a'),
    body: document.querySelector('body'),
    html: document.querySelector('html')
}

// Objeto con los métodos del menú

let mMenu = {
    inicioMenu: () => {
        for (let i = 0; i < pMenu.menuMovil.length; i++) {
            pMenu.menuMovil[0].addEventListener('click', mMenu.mostrarMenu);
            pMenu.menuMovil[1].addEventListener('click', mMenu.ocultarMenu)
        }
        for (let i = 0; i < pMenu.botonera.length; i++) {
            pMenu.botonera[i].addEventListener('click', mMenu.ocultarMenu);
        }
    },
    mostrarMenu: () => {
        if (window.matchMedia('(max-width: 990px)').matches) {
            // Cambiar icono de menú
            for (let i = 0; i < pMenu.menuMovil.length; i++) {
                pMenu.menuMovil[0].style.opacity = 0;
                pMenu.menuMovil[0].style.zIndex = 0;
                pMenu.menuMovil[1].style.opacity = 1;
                pMenu.menuMovil[1].style.zIndex = 2;
                pMenu.menuMovil[1].style.transition = 'all .5s';
            }
            // Mostrar Botonera del menú
            pMenu.navegacion.style.display = 'flex';
            pMenu.navegacion.style.flexDirection = 'column';
            pMenu.navegacion.style.justifyContent = 'center';
            pMenu.navegacion.style.alignItems = 'center';
            pMenu.navegacion.style.position = 'absolute';
            pMenu.navegacion.style.maxHeight = '100%';
            pMenu.navegacion.style.top = '0';
            pMenu.navegacion.style.left = '0';
            pMenu.navegacion.style.width = '100%';
            pMenu.navegacion.style.height = '100vh';
            pMenu.navegacion.style.opacity = '1';
            pMenu.navegacion.style.transition = 'max-height .7s, opacity 2s';
            pMenu.navegacion.style.zIndex = '1';
            pMenu.body.style.maxHeight = '100vh';
            pMenu.body.style.overflow = 'hidden';
            pMenu.html.style.overflow = 'hidden';
        }

    },
    ocultarMenu: () => {

        if (window.matchMedia('(max-width: 990px)').matches) {
            // Cambiar Icono del menú
            for (let i = 0; i < pMenu.menuMovil.length; i++) {
                pMenu.menuMovil[0].style.opacity = 1;
                pMenu.menuMovil[0].style.zIndex = 1;
                pMenu.menuMovil[1].style.opacity = 0;
                pMenu.menuMovil[1].style.zIndex = 0;
                pMenu.menuMovil[0].style.transition = 'all .5s';
            }
            // Ocultar Botonera del menú
            pMenu.navegacion.style.maxHeight = '-10rem';
            pMenu.navegacion.style.opacity = '0';
            pMenu.navegacion.style.transition = 'max-height 2s, opacity .7s';
            pMenu.navegacion.style.zIndex = '-1';
            pMenu.body.style.maxHeight = '100%';
            pMenu.body.style.overflow = 'scroll';
            pMenu.html.style.overflow = 'scroll';
        }

    }

}

mMenu.inicioMenu();