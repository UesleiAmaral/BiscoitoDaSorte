const listaDeFrases = [
  'A vida trará coisas boas se tiveres paciência.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.', 
  'A maior de todas as torres começa no solo.', 
  'Não compense na ira o que lhe falta na razão.', 
  'Não há que ser forte. Há que ser flexível.', 
  'Siga os bons e aprenda com eles.', 
  'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.', 
  'Uma bela flor é incompleta sem suas folhas.', 
  'Sem o fogo do entusiasmo, não há o calor da vitória.', 
  'Se você se sente só é porque construiu muros ao invés de pontes.', 
  'Deixe de lado as preocupações e seja feliz.', 
];

const random = Math.round(Math.random() * 10);

const biscoito = document.querySelector('.biscoito');
const sorte = document.querySelector('.container-sorte');
const container = document.querySelector('.container');
const frase = document.querySelector('.frase');
const button = document.querySelector('.button-sorte');

biscoito.addEventListener('click', () => {

  frase.textContent = listaDeFrases[random];

  sorte.classList.remove('hide');
  container.classList.add('hide');

});

button.addEventListener('click', () => {
  location.reload();

});