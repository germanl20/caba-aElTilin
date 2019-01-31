let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrarMenu'); //le agregamos a menu la clase mostrarMenu y va variando entre la que ya tiene y esta nueva
});

/*let mainNav = document.getElementById("main-nav");
let altura = mainNav.offsetTop; /*CON OFFSETTOP AVERIGUO LA DISTANCIA DESDE ARRIBA DE TODO HASTA EL OBJETO 
window.addEventListener("scroll", function(){
    'use strict';
    if(window.pageYOffset > altura){ /*CON PAGEYOFFSET AVERIGUO HASTA DONDE HICE SCROLL 
        mainNav.classList.add('fixed');
    } else{
        mainNav.classList.remove('fixed');
    }
});*/