//Botão para sortear
const btnDraw = document.querySelector('.btnDraw');
//Campo de textarea
const textarea = document.querySelector('textarea');
//O parágrafo que aparece o resultado
const result = document.querySelector('.result--final');
//A div em popup que conterá o resultado
const popUpResult = document.querySelector('.result');
//Botão para fechar popup
const btnClose = document.querySelector('.closeBtn')

function getFormData(event){
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


btnDraw.addEventListener('click', getFormData);

// O tamanho do array será importante para sortear um valor o utilizando como o máximo
function generateRandonNumber(arrayLength){
    // Irá retornar um número inteiro aleatório de acordo com o tamanho do array, sendo o zero o primeiro valor (?)
    return Math.floor(Math.random() * (arrayLength - 0) + 0);
}

function showResult(name){
    result.innerText = `Resultado: ${name}`;
    popUpResult.classList.add('showResult');
}

function closePopUp(){
    popUpResult.classList.remove('showResult');
}

btnClose.addEventListener('click', closePopUp);