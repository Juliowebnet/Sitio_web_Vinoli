// ----------------------------------------------
// -----------------------------------------------
// ------------------------------------------------
// Funcionalidad del menu desplegable

var cerrarMenu = document.getElementById('icono-menu');
var menu = document.getElementById('menu');
var contenedor = document.getElementById('contenedor-menu');
var n = 1;

// eventos del mouse sobre el icono del nav
cerrarMenu.addEventListener("mouseover", animarNav);
cerrarMenu.addEventListener("mouseout", quitarAnimarNav);

function abrirMenu() {
    if (n == 1) {
        n = 2;
        cerrarMenu.classList.toggle('animar-nav');
    } else {
        n = 1;
        cerrarMenu.classList.toggle('animar-nav');
    }
    contenedor.classList.toggle('ocultar-contenedor')
    menu.classList.toggle('mostrar-menu')
    cerrarMenu.classList.toggle('cerrar-menu')
}
function animarNav() {
    if (n == 1) {
        cerrarMenu.classList.toggle('animar-nav');
    }
}
function quitarAnimarNav() {
    if (n == 1) {
        cerrarMenu.classList.toggle('animar-nav');
    }
}



// ----------------------------------------------
// -----------------------------------------------
// ------------------------------------------------
// Funciones para el slider de la cabecera

// Variables
var estado = 1;
var mover;


let slider1 = document.getElementById('slider1');
let slider2 = document.getElementById('slider2');
let slider3 = document.getElementById('slider3');
// Sliders movil
let sliderMovil1 = document.getElementById('slider-movil-1');
let sliderMovil2 = document.getElementById('slider-movil-2');
let sliderMovil3 = document.getElementById('slider-movil-3');

let nav1 = document.getElementById('nav-select1');
let nav2 = document.getElementById('nav-select2');
let nav3 = document.getElementById('nav-select3');

// logica para la navegacion del slider

// eventos click para la navegacion del slider
document.getElementById('slider-nav-1').addEventListener("click", primeraImagen);
document.getElementById('slider-nav-2').addEventListener("click", segundaImagen);
document.getElementById('slider-nav-3').addEventListener("click", terceraImagen);

// funciones

function primeraImagen() {
    if (estado != 1) {
        clearInterval(mover);
        slider1.classList = "slider-img";
        slider2.classList = "slider-img slider-oculto1";
        slider3.classList = "slider-img slider-oculto1";
        nav1.classList = "nav-activo";
        nav2.classList = "";
        nav3.classList = "";
        estado = 1;

    }
}
function segundaImagen() {
    if (estado != 2) {
        clearInterval(mover);
        slider1.classList = "slider-img slider-oculto2";
        slider2.classList = "slider-img";
        slider3.classList = "slider-img slider-oculto1";
        nav1.classList = "";
        nav2.classList = "nav-activo";
        nav3.classList = "";
        estado = 2;

    }
}
function terceraImagen() {
    if (estado != 3) {
        clearInterval(mover);
        slider1.classList = "slider-img slider-oculto2";
        slider2.classList = "slider-img slider-oculto2";
        slider3.classList = "slider-img";
        nav1.classList = "";
        nav2.classList = "";
        nav3.classList = "nav-activo";
        estado = 3;

    }
}

// Configuracion de los temporizadores
setTimeout(function () {
    setTimeout(function () {
        if (estado != 2) {
            slider1.classList = "slider-img slider-oculto2";
            slider2.classList = "slider-img";
            slider3.classList = "slider-img slider-oculto1";
            sliderMovil1.classList = "slider-img slider-oculto2";
            sliderMovil2.classList = "slider-img";
            sliderMovil3.classList = "slider-img slider-oculto1";
            nav1.classList = "";
            nav2.classList = "nav-activo";
            nav3.classList = "";
            estado = 2;
        }
    }, 2000, "JavaScript");
    setTimeout(function () {
        if (estado != 3) {
            slider1.classList = "slider-img slider-oculto2";
            slider2.classList = "slider-img slider-oculto2";
            slider3.classList = "slider-img";
            sliderMovil1.classList = "slider-img slider-oculto2";
            sliderMovil2.classList = "slider-img slider-oculto2";
            sliderMovil3.classList = "slider-img";
            nav1.classList = "";
            nav2.classList = "";
            nav3.classList = "nav-activo";
            estado = 3;
        }
    }, 4000, "JavaScript");
    setTimeout(function () {
        if (estado != 1) {
            slider1.classList = "slider-img";
            slider2.classList = "slider-img slider-oculto1";
            slider3.classList = "slider-img slider-oculto1";
            sliderMovil1.classList = "slider-img";
            sliderMovil2.classList = "slider-img slider-oculto1";
            sliderMovil3.classList = "slider-img slider-oculto1";
            nav1.classList = "nav-activo";
            nav2.classList = "";
            nav3.classList = "";
            estado = 1;
        }
    }, 6000, "JavaScript");
}, 0, "JavaScript");

mover = setInterval(function () {
    setTimeout(function () {
        if (estado != 2) {
            slider1.classList = "slider-img slider-oculto2";
            slider2.classList = "slider-img";
            slider3.classList = "slider-img slider-oculto1";
            sliderMovil1.classList = "slider-img slider-oculto2";
            sliderMovil2.classList = "slider-img";
            sliderMovil3.classList = "slider-img slider-oculto1";
            nav1.classList = "";
            nav2.classList = "nav-activo";
            nav3.classList = "";
            estado = 2;
        }
    }, 2000, "JavaScript");
    setTimeout(function () {
        if (estado != 3) {
            slider1.classList = "slider-img slider-oculto2";
            slider2.classList = "slider-img slider-oculto2";
            slider3.classList = "slider-img";
            sliderMovil1.classList = "slider-img slider-oculto2";
            sliderMovil2.classList = "slider-img slider-oculto2";
            sliderMovil3.classList = "slider-img";
            nav1.classList = "";
            nav2.classList = "";
            nav3.classList = "nav-activo";
            estado = 3;
        }
    }, 4000, "JavaScript");
    setTimeout(function () {
        if (estado != 1) {
            slider1.classList = "slider-img";
            slider2.classList = "slider-img slider-oculto1";
            slider3.classList = "slider-img slider-oculto1";
            sliderMovil1.classList = "slider-img";
            sliderMovil2.classList = "slider-img slider-oculto1";
            sliderMovil3.classList = "slider-img slider-oculto1";
            nav1.classList = "nav-activo";
            nav2.classList = "";
            nav3.classList = "";
            estado = 1;
        }
    }, 6000, "JavaScript");

}, 6000, "JavaScript");

// ----------------------------------------------
// -----------------------------------------------
// ------------------------------------------------
// animaciones al cargar la pagina
function animaciones() {
    document.getElementById('parrafo-principal').classList.toggle('oculto-izquierda');
    document.getElementById('img-titulo').classList.toggle('logo-transparente');
}


// console.log(posicion.top);

// ----------------------------------------------
// -----------------------------------------------
// ------------------------------------------------
// animaciones con el efecto scroll

var nosotros = document.getElementById('nosotros');
var diferencia = document.getElementById('diferencia');

window.addEventListener("scroll", posicionScroll);

function posicionScroll (){
    var posicion1 = nosotros.getBoundingClientRect().top;
    var posicion2 = diferencia.getBoundingClientRect().top;
    let tamañoPantalla = parseInt(window.innerHeight / 2);
    // console.log(posicion);
    
    if (posicion1 <= tamañoPantalla){
        document.getElementById('nosotrosH1').className= "titulo-animado";
        document.getElementById('contenedor-img-nosotros').className= "imagen-animada";
        document.getElementById('parrafo1').className= "parrafo-animado1";
        document.getElementById('parrafo2').className= "parrafo-animado2";
        document.getElementById('parrafo3').className= "parrafo-animado3";
    }
    if (posicion2 <= tamañoPantalla){
        document.getElementById('diferenciaH1').className= "titulo-animado";
        document.getElementById('contenedor-img-diferencia').className= "imagen-animada";
        document.getElementById('parrafo1-diferencia').className= "parrafo-animado1";
        document.getElementById('parrafo2-diferencia').className= "parrafo-animado2";
    }
    
}
