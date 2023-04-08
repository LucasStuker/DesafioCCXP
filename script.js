const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const lancamento = "1 oct 2023"

function countDown (){
    const dataLanca = new Date(lancamento);
    const hoje = new Date ();

    const segTotal = (dataLanca - hoje)/1000;
    const finalDias = Math.floor(segTotal / 60 / 60/ 24);
    const finalHoras = Math.floor(segTotal / 60 /60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${formatTime(finalDias)}D`;
    hora.innerHTML = `${formatTime(finalHoras)}H`;
    minuto.innerHTML = `${formatTime(finalMinutos)}M`;
    segundo.innerHTML = `${formatTime(finalSegundos)}S`;

}

countDown ();
setInterval(countDown, 1000)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

var video = document.getElementById("video");

video.autoplay = true;
