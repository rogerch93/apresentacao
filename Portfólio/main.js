/*efeito de escrita automatica*/
function write(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra,i) =>{
    setTimeout(() => elemento.innerHTML += letra , 75 *i);
  });
}

const titulo = document.querySelector('.animation h1');
write(titulo);


