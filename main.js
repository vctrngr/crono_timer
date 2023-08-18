// ideias

// botão start se transforma em 'pausa'
// botão 'lap': pega o tempo atual e salva

// timer: switch crono/timer?
// mesmos elementos, mas .time teria que ser editável
// se for editável, teria que converter pra int

// fanciness: usar centésimos de seg
// mas teria que chamar a função a cada 0.01s


// global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let counter = 0;
let interval = null;


// Event Listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


// cronometro

function timer() {
    
    // talvez ter aqui um arg 'switch'
    // if switch == 0, counter ++ (cronometro)
    // if switch == 1, counter -- (timer)
    counter++;
    
    // format time 
    let hrs = Math.floor(counter / 3600);
    let mins = Math.floor((counter % 3600) / 60);
    let secs = (counter % 3600) % 60;
    
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
    if (interval) {
        return;
    }
    
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    counter = 0;
    time_el.innerText = '00:00:00'
}