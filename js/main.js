// EXPANDER MENU

const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })

    }
}
showMenu('nav-toggle','navbar','body-pd')

// ==== Link active ====

const lickColor = document.querySelectorAll('.nav__link')

function colorLink() {
    lickColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

lickColor.forEach(l => l.addEventListener('click', colorLink))

// === show collapse ===

const linkCollapse = document.getElementsByClassName('collapse__link')
var i 

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')
    // === Rotate ===
        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}