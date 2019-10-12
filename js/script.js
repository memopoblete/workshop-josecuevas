const burgerButton = document.querySelector("#burger-button")
const menu = document.querySelector(".menu")
const navItems = document.querySelectorAll(".navbar-item")

burgerButton.addEventListener("click", activateMenu)

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", activateMenu)
}

function activateMenu () {
    if (menu.classList.contains("active") == true) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
}