
const Jn = window.innerHeight;
window.addEventListener("scroll", mn);
function mn() {
    
    window.scrollY > document.getElementById('home').clientHeight ? (document.getElementById('nav-background').classList.replace("bg-transparent", "bg-neutrals-900/80"),
    document.getElementById('nav-background').classList.add("backdrop-blur-[8px]"), document.getElementById('header').style.position='fixed') : (document.getElementById('nav-background').classList.replace("bg-neutrals-900/80", "bg-transparent"),
    document.getElementById('nav-background').classList.remove("backdrop-blur-[8px]"), document.getElementById('header').style.position='relative')
    
}
//nav contents 
document.getElementById('toggle-button').addEventListener("click", c);
function c() {
    document.getElementById('toggle-menu-open').classList.toggle("hidden")
    document.getElementById("toggle-menu-close").classList.toggle("hidden")
    document.getElementById("nav-background").classList.toggle("translate-y-0")
    document.getElementById("nav-content").classList.toggle("opacity-100")
    document.getElementById("nav-content").classList.toggle("translate-y-1/2")
}      

