// Botões para sortear
const btnDrawNames = document.getElementById('btn-draw-names');
const btnDrawNumbers = document.getElementById('btn-draw-numbers');
// Campos de textarea e input
const textareaNames = document.getElementById('inputNames');
const minNumber = document.getElementById('min');
const maxNumber = document.getElementById('max');
// O parágrafo que exibe o resultado
const resultName = document.getElementById('result--name');
const resultNumber = document.getElementById('result--number');
// A div em popup que contém o resultado
const popUpResultName = document.getElementById('result-name');
const popUpResultNumber = document.getElementById('result-number');
// Botões para fechar popup
const btnCloseName = document.getElementById('closeBtnName');
const btnCloseNumber = document.getElementById('closeBtnNumber');
// Tab para mostrar o sorteador de nomes
const option1 = document.getElementById('option1');
// Tab para mostrar o sorteador de números
const option2 = document.getElementById('option2');
// Sessão com o sorteador de nomes
const content1 = document.getElementById('content1');
// Sessão com o sorteador de números
const content2 = document.getElementById('content2');

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

// SORTEIO DE NOMES

// O tamanho do array será importante para sortear um valor o utilizando como o máximo
function generateRandonNumber(arrayLength) {
     // Irá retornar um número inteiro aleatório de acordo com o tamanho do array, sendo o zero o primeiro valor (?)
    return Math.floor(Math.random() * arrayLength);
}

function showResultName(name) {
    resultName.innerText = `Resultado: ${name}`;
    popUpResultName.classList.add('showResult');
}

function closePopUp() {
    popUpResultName.classList.remove('showResult');
    popUpResultNumber.classList.remove('showResult');
}

function getFormDrawNames(event) {
    event.preventDefault();
    // Pegar valor digitado no textarea
    const inputValue = textareaNames.value;
    // Guardará os nomes digitados em uma lista, sem considerar a ','
    const namesList = inputValue.split(',');
    // Receberá a quantidade de nomes digitados
    const arrayLength = namesList.length;
    // Guardará o número sorteado, referente ao nome escrito sorteado
    const namePosition = generateRandonNumber(arrayLength);
    // Guardará o nome referente ao número sorteado
    const name = namesList[namePosition];
    // Mostrará o nome sorteado
    showResultName(name);

    //Limpa o campo para um novo sorteio
    textareaNames.value = '';
}

btnDrawNames.addEventListener('click', getFormDrawNames);
btnCloseName.addEventListener('click', closePopUp);


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
