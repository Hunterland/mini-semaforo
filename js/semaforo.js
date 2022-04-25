// constante que recebe o elemento 'id' //
const img = document.getElementById( 'img' );
const buttons = document.getElementById ( 'buttons' );

// VARIAVEIS //
let colorIndex = 0;
let intervalId = null;

// EVENTO CLICK//
const trafficLight = ( event ) => {
    stopAutomatic();  
    turnOn[event.target.id]();                      
}

const nexIndex = () => {
    if (colorIndex < 2){
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

//ESCOLHER A COR//
const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nexIndex();
}

// PROCESSO DE INTERVALO //
const stopAutomatic = () => {
    clearInterval( intervalId );
}

// LIGANDO OS BOTÕES //
const turnOn = {
    'red':     () => img.src = './img/vermelho.png',
    'yellow':  () => img.src = './img/amarelo.png',
    'green':   () => img.src = './img/verde.png', 
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}


buttons.addEventListener('click', trafficLight);
