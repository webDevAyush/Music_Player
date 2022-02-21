console.log('This is my Music Player');

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');




// Songs Title 
const song = ['hey', 'summer', 'ukulele'];


// Keep track of Songs 

let songIndex = 1;


// Initially load song info DOM 

loadSong(song[songIndex]);




function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`
};


function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play')
    playBtn.querySelector('i.fa').classList.add('fa-pause')
    audio.play();
}


function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    audio.pause();
}


function prevSong() {
    songIndex --

    if (songIndex < 0){
        songIndex = song.length -1
    }
    loadSong(song[songIndex]);
    playSong();
}

function nextSong() {
    songIndex ++

    if(songIndex > song.length - 1){
        songIndex = 0 
    }
    loadSong(song[songIndex]);
    playSong();
}

function updateProgress(e) {
    // console.log(e.srcElement.currentTime);
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    // console.log(clickX);
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Event Listners 

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})

// Change Song Events 

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);




// Progress Bar 

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);