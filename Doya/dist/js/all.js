const menuMobile = document.querySelector('#menu-mobile')
const overlay = document.querySelector('#overlay')

const show = (e) => {
    return function() {
        e.classList.add('visible')
        e.classList.remove('hidden')
    }
}

const hide = (e) => {
    return function() {
        e.classList.add('hidden')
        e.classList.remove('visible')
    }
}

document.querySelector('#toggle-mobile').addEventListener('click', show(overlay))
document.querySelector('#toggle-mobile').addEventListener('click', show(menuMobile))

document.querySelector('#hide-menu').addEventListener('click', hide(overlay))
document.querySelector('#hide-menu').addEventListener('click', hide(menuMobile))