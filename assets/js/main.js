/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== PORTFOLIO SWIPER  ====================*/
/* Requer o swiper-bundle.min.js já incluído no HTML */
if (typeof Swiper !== 'undefined') {
  const swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: true,
    keyboard: true
  })
}


/*==================== TESTIMONIAL SWIPER ====================*/
if (typeof Swiper !== 'undefined') {
  const swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination-testimonial',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
}






/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')
    const menuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (menuLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        menuLink.classList.add('active-link')
      } else {
        menuLink.classList.remove('active-link')
      }
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header')
  if (header) {
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
/* Só vai funcionar se você criar o elemento #scroll-up no HTML */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (scrollUp) {
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Pega o tema já selecionado, se existir
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton && themeButton.classList.contains(iconTheme)
    ? 'uil-moon'
    : 'uil-sun'

// Se o usuário já escolheu um tema antes, aplica
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  if (themeButton) {
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
      iconTheme
    )
  }
}

// Ativa/desativa o tema ao clicar na lua
if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Salva no localStorage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

//===================FONT-SIZE=====================
const aumentaFonte = document.getElementById('font+button');
const diminuiFonte = document.getElementById('font-button');
let tamanhoAtualFonte = 1;
aumentaFonte.addEventListener('click', function(){
  if(tamanhoAtualFonte < 2.5){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  } else if(tamanhoAtualFonte >= 2.5){
    tamanhoAtualFonte += 0;
  }
});
diminuiFonte.addEventListener('click', function(){
  if(tamanhoAtualFonte > 0.2){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  }
})
