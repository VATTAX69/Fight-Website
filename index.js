const menu = document.querySelector('.openMenuBtn')
const close = document.querySelector('.closeMenuBtn')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () =>{
    nav.classList.remove('open-nav')
})