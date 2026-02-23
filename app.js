//JS TODO

//select hamburger
const hamburger = document.querySelector('.hamburger')
//select link-list
const navMenu = document.querySelector('.nav-menu')
//add Even Listener
hamburger.addEventListener('click', mobileMenu)
//navmenu function
//toogle active
//toogle active
function mobileMenu() {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}
