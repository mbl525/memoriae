//  https://youtu.be/QTHRWGn_sJw?si=hKn0K8LPnDc3VzC2
// use for music player credits!

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("music-player");
const title = document.getElementById("song-title");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next.btn");
const prevBtn = document.getElementById("prev-btn");

playBtn.addEventListener("click", playPauseSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

const playlist = [
    {
        title: "chill frutiger aero",
        file: "assets/chill-frutiger-aero.mp3"
    },
    {
        title: "title - 3d aqua slider pc",
        file: "assets/title-3Daquaslider.mp3"
    },
    {
        title: "lease - takeshi abo",
        file: "assets/lease.mp3"
    }
];

function loadSong() {
    const song = playlist[currentSong];
    audio.src = song.file;
    title.textContent = 'playing ${currentSong + 1} of 3: ${song.title}';
}

function playPauseSong() {
    if(isPlaying) {
        audio.pasue();
        playBtn.textContent = "▶";
    }
    else {
        audio.play();
        playBtn.textContent = "⏸";
    }
    //what does this mean??
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSong++;
    if(currentSong >= playlist.length) {
        currentSong = 0;
    }
    loadSong();
    audio.play();
}

function prevSong() {
    currentSong--;
    if(currentSong < 0) {
        currentSong = playlist.length - 1;
    }
    loadSong();
    audio.play();
}

loadSong();