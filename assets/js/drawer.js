// Botões para sortear
const btnDrawNames = document.getElementById('btn-draw-names');
const btnDrawNumbers = document.getElementById('btn-draw-numbers');
// Campos de textarea e input
const textareaNames = document.getElementById('inputNames');
const quantityNumbers = document.getElementById('quantity-numbers');
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

function generateRandonNumber(arrayLength) {
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
    const inputValue = textareaNames.value;
    const namesList = inputValue.split(',');
    const arrayLength = namesList.length;
    const namePosition = generateRandonNumber(arrayLength);
    const name = namesList[namePosition];
    showResultName(name);

    textareaNames.value = '';
}

btnDrawNames.addEventListener('click', getFormDrawNames);
btnCloseName.addEventListener('click', closePopUp);

function getFormDrawNumbers(event){
    event.preventDefault();
    const min = parseInt(minNumber.value);
    const max = parseInt(maxNumber.value);
    const resultNumberFinal = Math.floor(Math.random() * (max - min + 1) + min);

    resultNumber.innerText = `Resultado: ${resultNumberFinal}`;
    popUpResultNumber.classList.add('showResult');
}

btnDrawNumbers.addEventListener('click', getFormDrawNumbers);
btnCloseNumber.addEventListener('click', closePopUp);
