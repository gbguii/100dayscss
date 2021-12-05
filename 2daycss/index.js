const navBurguer = document.querySelector(".container");

function activeClass(){
    navBurguer.classList.toggle("active")
}

navBurguer.addEventListener("click", activeClass);