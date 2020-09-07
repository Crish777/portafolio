// Objeto con las propiedades de la galería

let pGaleria = {
    img: document.querySelectorAll('.proyectos-cris img'),
    ruta: null,
    item: null,
    body: document.querySelector('body'),
    lightbox: null,
    modal: null,
    retroceder: null,
    avanzar: null,
    animacion: 'arriba',
    item: 0
}

// Objeto con los métodos de la galería

let mGaleria = {
    inicioGaleria: () => {
        for (let i = 0; i < pGaleria.img.length; i++) {
            pGaleria.img[i].addEventListener('click', mGaleria.capturarItem);
        }
    },
    capturarItem: (ruta) => {
        pGaleria.ruta = ruta.target;
        pGaleria.item = ruta.target.getAttribute('item');
        mGaleria.lightbox(pGaleria.ruta);
    },
    lightbox: (ruta) => {
        pGaleria.body.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox');
        pGaleria.lightbox = document.querySelector('#lightbox');

        // Estilos del lightbox
        pGaleria.lightbox.style.backgroundColor = 'rgba(0,0,0,.5)';
        pGaleria.lightbox.style.width = '100%';
        pGaleria.lightbox.style.height = '100%';
        pGaleria.lightbox.style.position = 'fixed';
        pGaleria.lightbox.style.zIndex = '100';
        pGaleria.lightbox.style.top = '0';
        pGaleria.lightbox.style.left = '0';
        pGaleria.lightbox.style.display = 'flex';
        pGaleria.lightbox.style.alignItems = 'center';
        pGaleria.lightbox.style.justifyContent = 'center';

        pGaleria.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        pGaleria.modal = document.querySelector('#modal');

        pGaleria.modal.innerHTML = ruta.outerHTML + '<div>x</div>';
        if (window.matchMedia('(min-width: 768px)').matches) {
            pGaleria.modal.style.width = '70%'
        } else {
            pGaleria.modal.style.width = '97%'
        }
        if (pGaleria.animacion == 'arriba') {
            pGaleria.modal.style.marginBottom = '77rem';
            pGaleria.modal.style.opacity = '0';
            setTimeout(function() {
                pGaleria.modal.style.marginBottom = '0';
                pGaleria.modal.style.opacity = '1';
                pGaleria.modal.style.transition = '.7s';
            }, 7)
        }
        pGaleria.modal.style.position = 'relative';
        pGaleria.modal.childNodes[0].style.width = '100%';
        pGaleria.modal.childNodes[0].style.border = '.7rem solid #fff';
        pGaleria.modal.childNodes[0].style.borderRadius = '7%';
        pGaleria.modal.childNodes[1].style.position = 'absolute';
        pGaleria.modal.childNodes[1].style.top = '0%';
        pGaleria.modal.childNodes[1].style.right = '0%';
        pGaleria.modal.childNodes[1].style.padding = '1rem';
        pGaleria.modal.childNodes[1].style.backgroundColor = '#ddd';
        pGaleria.modal.childNodes[1].style.border = '.5rem solid #fff';
        pGaleria.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pGaleria.modal.childNodes[1].style.fontSize = '1.4rem';
        pGaleria.modal.childNodes[1].style.cursor = 'pointer';

        pGaleria.modal.childNodes[1].addEventListener('click', mGaleria.removerLightbox);

        pGaleria.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'retroceder');
        pGaleria.retroceder = document.querySelector('#retroceder');
        pGaleria.retroceder.innerHTML = '<div><i class="fas fa-chevron-circle-left"></i></div>';
        pGaleria.lightbox.childNodes[1].style.position = 'absolute';
        pGaleria.lightbox.childNodes[1].style.top = '45%';
        pGaleria.lightbox.childNodes[1].style.left = '1%';
        pGaleria.lightbox.childNodes[1].style.fontSize = '4rem';
        pGaleria.lightbox.childNodes[1].style.opacity = '.5';
        pGaleria.lightbox.childNodes[1].style.color = 'white';
        pGaleria.lightbox.childNodes[1].style.cursor = 'pointer';

        pGaleria.lightbox.childNodes[1].addEventListener('click', mGaleria.retrocederGaleria);

        pGaleria.lightbox.appendChild(document.createElement('DIV')).setAttribute('id', 'avanzar');
        pGaleria.avanzar = document.querySelector('#avanzar');
        pGaleria.avanzar.innerHTML = '<div><i class="fas fa-chevron-circle-right"></i></div>';
        pGaleria.lightbox.childNodes[2].style.position = 'absolute';
        pGaleria.lightbox.childNodes[2].style.top = '45%';
        pGaleria.lightbox.childNodes[2].style.right = '2%';
        pGaleria.lightbox.childNodes[2].style.fontSize = '4rem';
        pGaleria.lightbox.childNodes[2].style.opacity = '.5';
        pGaleria.lightbox.childNodes[2].style.color = 'white';
        pGaleria.lightbox.childNodes[2].style.cursor = 'pointer';

        pGaleria.lightbox.childNodes[2].addEventListener('click', mGaleria.avanzarGaleria);

    },
    removerLightbox: function() {
        pGaleria.lightbox.parentNode.removeChild(pGaleria.lightbox);
    },
    retrocederGaleria: function() {
        if (pGaleria.item == 0) {
            pGaleria.item = pGaleria.img.length - 1;
        } else {
            pGaleria.item--;
        }
        pGaleria.modal.innerHTML = pGaleria.img[pGaleria.item].outerHTML + '<div>x</div>';
        if (window.matchMedia('(min-width: 768px)').matches) {
            pGaleria.modal.style.width = '70%'
        } else {
            pGaleria.modal.style.width = '97%'
        }
        if (pGaleria.animacion == 'arriba') {
            pGaleria.modal.style.marginBottom = '77rem';
            pGaleria.modal.style.opacity = '0';
            setTimeout(function() {
                pGaleria.modal.style.marginBottom = '0';
                pGaleria.modal.style.opacity = '1';
                pGaleria.modal.style.transition = '.7s';
            }, 7)
        }
        pGaleria.modal.style.position = 'relative';
        pGaleria.modal.childNodes[0].style.width = '100%';
        pGaleria.modal.childNodes[0].style.border = '.7rem solid #fff';
        pGaleria.modal.childNodes[0].style.borderRadius = '7%';
        pGaleria.modal.childNodes[1].style.position = 'absolute';
        pGaleria.modal.childNodes[1].style.top = '0%';
        pGaleria.modal.childNodes[1].style.right = '0%';
        pGaleria.modal.childNodes[1].style.padding = '1rem';
        pGaleria.modal.childNodes[1].style.backgroundColor = '#ddd';
        pGaleria.modal.childNodes[1].style.border = '.5rem solid #fff';
        pGaleria.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pGaleria.modal.childNodes[1].style.fontSize = '1.4rem';
        pGaleria.modal.childNodes[1].style.cursor = 'pointer';

        pGaleria.modal.childNodes[1].addEventListener('click', mGaleria.removerLightbox);
    },
    avanzarGaleria: function() {
        if (pGaleria.item == pGaleria.img.length - 1) {
            pGaleria.item = 0;
        } else {
            pGaleria.item++;
        }
        pGaleria.modal.innerHTML = pGaleria.img[pGaleria.item].outerHTML + '<div>x</div>';
        if (window.matchMedia('(min-width: 768px)').matches) {
            pGaleria.modal.style.width = '70%'
        } else {
            pGaleria.modal.style.width = '97%'
        }
        if (pGaleria.animacion == 'arriba') {
            pGaleria.modal.style.marginBottom = '77rem';
            pGaleria.modal.style.opacity = '0';
            setTimeout(function() {
                pGaleria.modal.style.marginBottom = '0';
                pGaleria.modal.style.opacity = '1';
                pGaleria.modal.style.transition = '.7s';
            }, 7)
        }
        pGaleria.modal.style.position = 'relative';
        pGaleria.modal.childNodes[0].style.width = '100%';
        pGaleria.modal.childNodes[0].style.border = '.7rem solid #fff';
        pGaleria.modal.childNodes[0].style.borderRadius = '7%';
        pGaleria.modal.childNodes[1].style.position = 'absolute';
        pGaleria.modal.childNodes[1].style.top = '0%';
        pGaleria.modal.childNodes[1].style.right = '0%';
        pGaleria.modal.childNodes[1].style.padding = '1rem';
        pGaleria.modal.childNodes[1].style.backgroundColor = '#ddd';
        pGaleria.modal.childNodes[1].style.border = '.5rem solid #fff';
        pGaleria.modal.childNodes[1].style.borderRadius = '0 7% 0 7%';
        pGaleria.modal.childNodes[1].style.fontSize = '1.4rem';
        pGaleria.modal.childNodes[1].style.cursor = 'pointer';

        pGaleria.modal.childNodes[1].addEventListener('click', mGaleria.removerLightbox);
    }

}

mGaleria.inicioGaleria();