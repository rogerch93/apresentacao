/*efeito de escrita automatica*/
function write(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i)
  })
}

const titulo = document.querySelector('.card1 h1')
write(titulo)

/*botao do menu*/
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if(event.type ==='touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

/*botao para voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
  if(this.scrollY >= 500){
    backToTopButton.classList.add('show')
  }
  else{
    backToTopButton.classList.remove('show')
  }
})

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart',toggleMenu)

/*swipper paralax*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  mousewheel: true,

  pagination: {
    el: '.swiper-pagination'
  },

  autoplay:{
    delay: 3000,
  },

  parallax: true,

});

const swiperCubo = new Swiper('.swiper-container',{
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  direction: 'horizontal',
  mousewheel: true,

  autoplay:{
    delay: 3500,
  },
});
