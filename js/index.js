// document.addEventListener("scroll", function() {
//     const header = document.getElementById("header");
//     const topo = document.querySelector(".topo");

//     if (window.scrollY > 200) {
//         topo.classList.add("hidden");
//         header.style.padding = "100px 200px";
//     } else {
//         topo.classList.remove("hidden");
//         header.style.padding = "100px 100px";
//     }
// });

let btnMenu = document.getElementById('btn-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abir-menu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abir-menu')
})

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abir-menu')
})