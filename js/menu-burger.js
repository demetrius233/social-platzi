const menuBurger = document.querySelector(".menu-burger")
const body = document.body

menuBurger.addEventListener("click", (e)=>{
    e.preventDefault()
    body.classList.toggle("active")
})