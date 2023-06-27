//Botões para sortear
const btnDrawNames = document.getElementById('btn-draw-names')
const btnDrawNumbers = document.getElementById('btn-draw-numbers')
//Campos de textarea
const textareaNames = document.getElementById('inputNames');
const textareaNumbers = document.getElementById('inputNumbers');
//O parágrafo que aparece o resultado
const resultName = document.getElementById('result--name');
const resultNumber = document.getElementById('result--number');
//A div em popup que conterá o resultado
const popUpResultName = document.getElementById('result-name');
const popUpResultNumber = document.getElementById('result-number');
//Botão para fechar popup
const btnCloseName = document.getElementById('closeBtnName');
const btnCloseNumber = document.getElementById('closeBtnName');
//Tab para mostrar o sorteador de nomes
const option1 = document.getElementById('option1');
//Tab para mostrar o sorteador de números
const option2 = document.getElementById('option2');
//Sessão com o sorteador de nomes
const content1 = document.getElementById('content1');
//Sessão com o sorteador de números
const content2 = document.getElementById('content2');

let choose = 1;

textareaNumbers.addEventListener('input', function(){
    //Remove caracteres que não sejam númericos
    textareaNumbers.value = textareaNumbers.value.replace(/[^0-9]/g, '')
})