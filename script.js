/*=========================================
ANIMACIÓN DE ESCRITURA
=========================================*/

const typing = document.querySelector(".typing");

const textos = [
    "Técnico en Sistemas",
    "Administrador de Redes",
    ".NET Developer",
    "IT Support"
];

let texto = 0;
let letra = 0;
let borrando = false;

function escribir() {

    const actual = textos[texto];

    if (!borrando) {

        typing.textContent = actual.substring(0, letra + 1);

        letra++;

        if (letra === actual.length) {

            borrando = true;

            setTimeout(escribir, 1800);

            return;

        }

    } else {

        typing.textContent = actual.substring(0, letra - 1);

        letra--;

        if (letra === 0) {

            borrando = false;

            texto++;

            if (texto >= textos.length)
                texto = 0;

        }

    }

    setTimeout(escribir, borrando ? 40 : 90);

}

escribir();


/*=========================================
ANIMACIÓN AL HACER SCROLL
=========================================*/

const sections = document.querySelectorAll("section");

function mostrarSecciones() {

    sections.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        const visible = window.innerHeight * 0.82;

        if (top < visible) {

            sec.classList.add("show");

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();


/*=========================================
NAVBAR AL HACER SCROLL
=========================================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.padding = "15px 9%";
        navbar.style.background = "rgba(8,17,31,.97)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        navbar.style.padding = "20px 9%";
        navbar.style.background = "rgba(8,17,31,.92)";
        navbar.style.boxShadow = "none";

    }

});


/*=========================================
SECCIÓN ACTIVA DEL MENÚ
=========================================*/

const menuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
SCROLL SUAVE
=========================================*/

menuLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
BOTÓN VOLVER ARRIBA
=========================================*/

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "topButton";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "30px";
btnTop.style.right = "30px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#00bfff";
btnTop.style.color = "#08111f";
btnTop.style.fontSize = "24px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.transition = ".3s";
btnTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
EFECTO HOVER BOTÓN
=========================================*/

btnTop.addEventListener("mouseenter",()=>{

    btnTop.style.transform="scale(1.15)";

});

btnTop.addEventListener("mouseleave",()=>{

    btnTop.style.transform="scale(1)";

});