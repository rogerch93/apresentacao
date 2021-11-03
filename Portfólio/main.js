/*efeito de escrita automatica*/
function write(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra,i) =>{
    setTimeout(() => elemento.innerHTML += letra , 75 *i);
  });
}

const titulo = document.querySelector('.card1 h1');
write(titulo);

/*botao do menu*/
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);