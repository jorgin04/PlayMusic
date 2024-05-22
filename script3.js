
const progressBar = document.getElementById("progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

const buttonVoltar = document.querySelector('#voltar');
const buttonAvançar = document.querySelector('#avancar');



const music = new Audio('./assets/TUCA DONKA + HAKARI DANCE 4k (320).mp3');
let interval;



function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;
  tempoAtual.textContent = formatarTempo(music.currentTime);
}

music.addEventListener('loadedmetadata', function () {
  tempoTotal.textContent = formatarTempo(music.duration);
});

buttonVoltar.addEventListener('click', () => {
  window.location.href = 'index2.html';
});

buttonAvançar.addEventListener('click', () => {
  window.location.href = 'index.html';
});

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();
  interval = setInterval(updateMusicTime, 1000);
}

function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
}


buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
