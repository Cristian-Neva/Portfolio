const sections=document.querySelectorAll("section");

const mostrar=()=>{

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.style.opacity="1";
section.style.transform="translateY(0)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="all .8s ease";

});

window.addEventListener("scroll",mostrar);

mostrar();