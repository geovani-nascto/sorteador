// Botões para sortear
const btnDrawNumbers = document.getElementById('btn-draw-numbers');
// Campos de textarea e input
const minNumber = document.getElementById('min');
const maxNumber = document.getElementById('max');
// O parágrafo que exibe o resultado
const resultNumber = document.getElementById('result--number');
// A div em popup que contém o resultado
const popUpResultNumber = document.getElementById('result-number');
// Botões para fechar popup
const btnCloseNumber = document.getElementById('closeBtnNumber');
// Tab para mostrar o sorteador de nomes
const option1 = document.getElementById('option1');
// Tab para mostrar o sorteador de números
const option2 = document.getElementById('option2');
// Sessão com o sorteador de nomes
const content1 = document.getElementById('content1');
// Sessão com o sorteador de números
const content2 = document.getElementById('content2');
// Variáveis globais para armazenar os valores do sorteio atual
let currentNamesList = [];
let currentArrayLength = 0;


let choose = 1;

const changeDrawer = () => {
    option1.className = choose == 1 ? 'option option-active' : 'option';
    content1.className = choose == 1 ? 'content content-active' : 'content';

    option2.className = choose == 2 ? 'option option-active' : 'option';
    content2.className = choose == 2 ? 'content content-active' : 'content';
}

option1.addEventListener('click', () => {
    choose = 1;
    changeDrawer();
})

option2.addEventListener('click', () => {
    choose = 2;
    changeDrawer();
})

// textareaNumbers.addEventListener('input', function(){
//     //Remove caracteres que não sejam númericos
//     textareaNumbers.value = textareaNumbers.value.replace(/[^0-9]/g, '')
// })

function redoDraw() {
    if (choose === 1) { //Sorteio de nomes escolhido
      if (currentArrayLength > 0) {
        const namePosition = generateRandonNumber(currentArrayLength);
        const name = currentNamesList[namePosition];
        showResultName(name);
      } else {
        console.log('Nenhum nome foi sorteado anteriormente.');
      }
    } else if (choose === 2) { //Soteio de números escolhido
      if(quantityNumbers > 0){
          const numbersList = []
      }
    }
  }
  
  const btnTryDraw = document.getElementById('btn-try-draw');
  btnTryDraw.addEventListener('click', redoDraw);

//SORTEIO DE NÚMEROS

function getFormDrawNumbers(event){
    event.preventDefault();
    const quantityNumbers = parseInt(document.getElementById('quantity-numbers').value);

    // if (quantityNumbers <= 0) {
    //     console.log('A quantidade de números deve ser maior que zero.');
    //     return;
    //   }
    const min = parseInt(minNumber.value);
    const max = parseInt(maxNumber.value);

    const numbersList = []
    for(let i = 0; i < quantityNumbers; i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        numbersList.push(randomNumber)
    }

    resultNumber.innerText = `Resultado: ${numbersList.join(', ')}`;
    popUpResultNumber.classList.add('showResult');
}

btnDrawNumbers.addEventListener('click', getFormDrawNumbers);
btnCloseNumber.addEventListener('click', closePopUp);
