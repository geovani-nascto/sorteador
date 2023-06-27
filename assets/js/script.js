//Botão para sortear
// const btnDraw = document.querySelector('.btnDraw');
const btnDrawNames = document.getElementById('btnDrawNames')
const btnDrawNumbers = document.getElementById('btnDrawNumbers')
//Campo de textarea
const textarea = document.querySelector('textarea');
//O parágrafo que aparece o resultado
const result = document.querySelector('.result--final');
//A div em popup que conterá o resultado
const popUpResult = document.querySelector('.result');
//Botão para fechar popup
const btnClose = document.querySelector('.closeBtn')
//Tab para mostrar o sorteador de nomes
const option1 = document.getElementById('option1');
//Tab para mostrar o sorteador de números
const option2 = document.getElementById('option2');
//Sessão com o sorteador de nomes
const content1 = document.getElementById('content1');
//Sessão com o sorteador de números
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

function getFormDataNames(event) {
    event.preventDefault();
    // Pegar valor digitado no textarea
    const inputValue = textarea.value;
    // Guardará os nomes digitados em uma lista, sem considerar a ','
    const namesList = inputValue.split(',');
    // Receberá a quantidade de nomes digitados
    const arrayLength = namesList.length;
    // Guardará o número sorteado, referente ao nome escrito sorteado
    const namePosition = generateRandonNumber(arrayLength);
    // Guardará o nome referente ao número sorteado
    const name = namesList[namePosition];
    // Mostrará o nome sorteado
    showResult(name);

    //Limpa o campo para um novo sorteio
    textarea.value = '';
}

function getFormDataNumbers(event) {
    event.preventDefault();
    // Pegar valor digitado no textarea
    const inputValue = textarea.value;
    // Guardará os nomes digitados em uma lista, sem considerar a ','
    const numbersList = inputValue.split(',');
    // Receberá a quantidade de nomes digitados
    const arrayLength = numbersList.length;
    // Guardará o número sorteado, referente ao nome escrito sorteado
    const numberPosition = generateRandonNumber(arrayLength);
    // Guardará o nome referente ao número sorteado
    const number = numbersList[numberPosition];
    // Mostrará o nome sorteado
    showResult(number);

    //Limpa o campo para um novo sorteio
    textarea.value = '';
}


btnDrawNames.addEventListener('click', getFormDataNames);
btnDrawNumbers.addEventListener('click', getFormDataNumbers);

// O tamanho do array será importante para sortear um valor o utilizando como o máximo
function generateRandonNumber(arrayLength) {
    // Irá retornar um número inteiro aleatório de acordo com o tamanho do array, sendo o zero o primeiro valor (?)
    return Math.floor(Math.random() * (arrayLength - 0) + 0);
}

function showResult(name) {
    result.innerText = `Resultado: ${name}`;
    popUpResult.classList.add('showResult');
}

function showResult(number) {
    result.innerText = `Resultado: ${number}`;
    popUpResult.classList.add('showResult');
}

function closePopUp() {
    popUpResult.classList.remove('showResult');
}

btnClose.addEventListener('click', closePopUp);