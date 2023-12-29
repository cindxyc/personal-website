// targeting
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar__menu')

// function to display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is_active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)