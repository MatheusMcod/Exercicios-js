"use strict"

const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const reiniciar = document.getElementById('reiniciar');

let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cronometro;

function contIniciar() {
    cronometro = setInterval(timer, tempo);
}

function contPausar() {
    clearInterval(cronometro);
}

function contReiniciar() {
    clearInterval(cronometro);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('cont').innerHTML = '00:00:00';
}

function timer() {
    ss++;

    if(ss == 60) {
        ss = 0;
        mm++;

        if(mm == 60) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0'+ hh : hh) + ':' + (mm < 10 ? '0'+ mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('cont').innerHTML = format;
}


iniciar.addEventListener('click', contIniciar);
pausar.addEventListener('click', contPausar);
reiniciar.addEventListener('click', contReiniciar);
