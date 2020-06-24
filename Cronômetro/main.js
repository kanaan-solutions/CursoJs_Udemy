const cronometro = document.querySelector('#cronometro');
const botoes = document.querySelector('#botao');
const iniciar = botoes.querySelector('.iniciar');
const pausar = botoes.querySelector('.pausar');
const zerar = botoes.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++
        cronometro.innerHTML = criaHoraDosSegundos(segundos);
        cronometro.style.color = "#000000";
    }, 1000);
}

function meuCronometro() {

    iniciar.addEventListener('click', function(event){
        iniciaRelogio();
    })  

    pausar.addEventListener('click', function(event) {
        clearInterval(timer);
        cronometro.style.color = "#FF0000";
    })

    zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        segundos = 0;
        cronometro.innerHTML = '00:00:00';
        cronometro.style.color = "#000000";
    })
}

meuCronometro();