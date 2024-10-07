// Simulated list of songs (You could fetch songs from an API)
const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        cover: "album1.jpg",
        file: "song1.mp3",
        duration: "3:45"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        cover: "album2.jpg",
        file: "song2.mp3",
        duration: "4:05"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        cover: "album3.jpg",
        file: "song3.mp3",
        duration: "2:55"
    }
];

let songIndex = 0;
let isPlaying = false;

const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeControl = document.getElementById('volume');

// Song info DOM
const songTitleEl = document.getElementById('song-title');
const artistNameEl = document.getElementById('artist-name');
const albumCoverEl = document.getElementById('album-cover');

// Initialize Audio Element
const audio = new Audio();
audio.src = songs[songIndex].file;
totalDurationEl.textContent = songs[songIndex].duration;

// Load song
function loadSong(index) {
    songTitleEl.textContent = songs[index].title;
    artistNameEl.textContent = songs[index].artist;
    albumCoverEl.src = songs[index].cover;
    audio.src = songs[index].file;
    totalDurationEl.textContent = songs[index].duration;
}

// Play or pause the song
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

// Move to next song
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
    playPauseBtn.textContent = '⏸';
    isPlaying = true;
}

// Move to previous song
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
    playPauseBtn.textContent = '⏸';
    isPlaying = true;
}

// Update progress bar
function updateProgressBar() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
    currentTimeEl.textContent = formatTime(audio.currentTime);
}

// Format time helper function
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

// Set volume
function setVolume() {
    audio.volume = volumeControl.value / 100;
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgressBar);
volumeControl.addEventListener('input', setVolume);

// Initialize the first song
loadSong(songIndex);
