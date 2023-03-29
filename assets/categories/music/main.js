/* constantes para pegar os elementos por ID. */

const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

/* link dos arquivos de música */
const songs = ["Clickbait - Veigh", "Calm Down - Rema, Selena Gomez", "Die For You - The Weekend, Ariana Grande", "Eyes Closed - Ed Sheeran", "Flowers - Miley Cyrus", "Leão - Marília Mendonça", "Lovezinho - Treyce", "Nosso Quadro - Ana Castela", "Paradise - Coldplay", "Perdoa Por Tudo Vida - Veigh"];
let songIndex = 1;

/* function para puxar dos aquivos das músicas */
function getSongTitle(song) {
  return song.charAt(0).toUpperCase() + song.slice(1);
}

/* function para buscar as músicas e as capas */
function loadSong(song) {
  title.innerText = getSongTitle(song);
  audio.src = `../../../assets/categories/music/mp3/${song}.mp3`;
  cover.src = `../../../assets/categories/music/images/${song}.jpg`;
}

/* function para o icone e função de dar play na música */
function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

/* function para o icone e função de dar pause na música */
function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector("i.fas").classList.remove("fa-pause");
  playButton.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

/* function para o icone e função de dar voltar a música */
function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

/* function para o icone e função de pular na música  */
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

/* function para progresso da barra da música*/
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

/* function para interação com a barra em clicar e mudar a progressão */
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

// Init
loadSong(songs[songIndex]);


document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    event.preventDefault();
    const isPlaying = musicContainer.classList.contains("play");
    isPlaying ? pauseSong() : playSong();
  }
  else if (event.code === 'ArrowRight') {
    event.preventDefault();
    nextSong();
  } else if (event.code === 'ArrowLeft') {
    event.preventDefault();
    prevSong();
  }



});