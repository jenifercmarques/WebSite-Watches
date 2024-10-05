//animação Menu

const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose')

//validação de cada const

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}

//removendo o menu a cada clique em um dos links da nav

const navLink = document.querySelectorAll('.navLink')

linkAction = () => {
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Utilizando o Swipper para rolagem dos relogios
const swiperWatches = new Swiper('.homeSwiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
        next: {
            translate: [100, 0, -500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

//utilizando o GSAP para
gsap.from('.homeImages', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.homeData', 1.8, {opacity: 0, x: -100, delay: .8})
gsap.from('.homeInfo', 1.8, {opacity: 0, x: -100, delay: .1})


