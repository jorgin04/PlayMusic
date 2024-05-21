const albumImage = document.getElementById('albumImage');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const songs = [
    {
        title: 'Song 1',
        audio: 'song1.mp3',
        albumCover: 'album1.jpg'
    },
    {
        title: 'Song 2',
        audio: 'song2.mp3',
        albumCover: 'album2.jpg'
    },
    {
        title: 'Song 3',
        audio: 'song3.mp3',
        albumCover: 'album3.jpg'
    }
];

let currentSongIndex = 0;

function loadSong(songIndex) {
    const song = songs[songIndex];
    albumImage.src = song.albumCover;
    audioPlayer.src = song.audio;
}

function playPauseSong() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playPauseSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playPauseSong();
}

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

loadSong(currentSongIndex);