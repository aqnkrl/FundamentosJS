const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightBall = () => {
   const question = prompt('Pregunta:');
   const random =  Math.floor(Math.random() * 8);
   const options = [
      'si',
      'sipi',
      'No lo se ',
      'Puede ser',
      'Talvez ',
      'Nop',
      'Noporolo',
      'I dont know',
   ]
   h1.innerText = options [random];

}

main.addEventListener('click', eightBall);