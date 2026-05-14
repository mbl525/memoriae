//  https://youtu.be/QTHRWGn_sJw?si=hKn0K8LPnDc3VzC2
// use for music player credits!

console.log("music loaded");

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("music-player");
const title = document.getElementById("song-title");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slider = document.getElementById("seek-slider");
const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");

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

function updateProgress() {
    slider.max = audio.duration;
    slider.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
    totalTime.textContext = formatTime(audio.duration);
}
// audio uses seconds, so converting into mins for music player
function formatTime(seconds) {
    if(isNaN(seconds)) {
        return "0:00";
    }
    const mins = Math.floor(seconds/60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", updateProgress);

slider.addEventListener("input", function() {
    audio.currentTime = slider.value
})

function loadSong() {
    const song = playlist[currentSong];
    audio.src = song.file;
    title.textContent = `playing ${currentSong + 1} of 3: ${song.title}`;
}

function playPauseSong() {
    if(isPlaying) {
        audio.pause();
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

// STATS SECTION - FAV ARTIST

const concerts = JSON.parse(localStorage.getItem("concerts")) || [];

function showFavouriteArtist() {
    const artistCount = {};

    for(const concert of concerts) {
        const artist = concert.who;
        if(artistCount[artist]) {
            artistCount[artist]++;
        }
        else {
            artistCount[artist] = 1;
        }
    }

    if(concerts.length === 0) {
        document.getElementById("fav-artist-name").textContent = "none yet";
        return;
    }

    let favouriteArtist = "";
    let highestCount = 0;

    for(const artist in artistCount) {
        if(artistCount[artist] > highestCount) {
            highestCount = artistCount[artist];
            favouriteArtist = artist;
        }
    }

    document.getElementById("fav-artist-name").textContent = favouriteArtist;
}

showFavouriteArtist();

// STATS SECTION - STAR RATING AVERAGE

function showAverageRating() {
    if(concerts.length === 0) {
        document.getElementById("average-rating").textContent = "0*";
        return;
    }

    let totalRating = 0;
    // number() cus input saves as a string not a number
    for(const concert of concerts) {
        totalRating += Number(concert.rating);
    }

    const average = totalRating/concerts.length;
    const roundedAverage = average.toFixed(1); // rounding number

    document.getElementById("average-rating").textContent = `${roundedAverage}★`;
}

showAverageRating();

// STATS SECTION - NUMBER OF CONCERTS ATTENDED

function showConcertCount() {
    document.getElementById("concert-count").textContent = concerts.length;
}

showConcertCount();