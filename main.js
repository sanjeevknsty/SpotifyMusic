let songElement = new Audio('songs/1.mp3')
let progressBar = document.getElementById("progressBar")
let masterPlay = document.getElementById("master-play")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")
let bottomSongName = document.getElementById("bottom-song-name")
let bottomSongCover = Array.from(document.getElementsByClassName("bottom-song-cover"))
let songItemPlay = Array.from(document.getElementsByClassName("js-song-item-play"))
let songItem = Array.from(document.getElementsByClassName("js-song-item"))
let coverImage = Array.from(document.getElementsByClassName('js-cover-image'))
let index;
let songs = [
  { songName: "XXX-Tentacian", songPath: "songs/1.mp3", songCover: "coverimage/1.jpg" },
  { songName: "Monna Kanipinchavu", songPath: "songs/2.mp3", songCover: "coverimage/2.jpeg" },
  { songName: "TholiPrema", songPath: "songs/3.mp3", songCover: "coverimage/3.jpeg" },
  { songName: "ApnaTimeAyega", songPath: "songs/4.mp3", songCover: "coverimage/4.jpeg" },
  { songName: "ChaleAnna", songPath: "songs/5.mp3", songCover: "coverimage/5.jpg" },
  { songName: "Doori", songPath: "songs/6.mp3", songCover: "coverimage/6.jpg" },
  { songName: "Train-Song", songPath: "songs/7.mp3", songCover: "coverimage/1.jpg" },
  { songName: "Mrogindhi", songPath: "songs/8.mp3", songCover: "coverimage/2.jpeg" },
  { songName: "oh shanthi shanti", songPath: "songs/9.mp3", songCover: "coverimage/3.jpeg" },
  { songName: "jeena mena aaya maza", songPath: "songs/10.mp3", songCover: "coverimage/4.jpeg" },
]

coverImage.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].songCover
})

songItem.forEach((element, i) => {
  element.getElementsByClassName('js-song-name')[0].innerText = songs[i].songName
})

masterPlay.addEventListener('click', () => {
  if (songElement.paused || songElement.currentTime <= 0) {
    songElement.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
  }
  else {
    songElement.pause()
    masterPlay.classList.remove('fa-pause')
    masterPlay.classList.add('fa-play')
  }
})

songElement.addEventListener('timeupdate', () => {
  rangeProgress = parseInt((songElement.currentTime / songElement.duration) * 100)
  // console.log(rangeProgress)
  progressBar.value = rangeProgress
})

progressBar.addEventListener('change', () => {
  songElement.currentTime = progressBar.value * songElement.duration / 100
})

const MakeAllPlays = () => {
  songItemPlay.forEach((e) => {
    e.classList.remove('fa-pause')
    e.classList.add('fa-play')
    // masterPlay.classList.remove('fa-pause')
    // masterPlay.classList.add('fa-play')

  })
}

songItemPlay.forEach((element) => {
  element.addEventListener('click', (e) => {
    MakeAllPlays();
    index = parseInt(e.target.id)
    e.target.classList.remove('fa-play')
    e.target.classList.add('fa-pause')
    play_settings()
    // masterPlay.classList.remove('fa-play')
    // masterPlay.classList.add('fa-pause')
    // songElement.src = `songs/${index}.mp3`
    // songElement.currentTime = 0
    // bottomSongName.innerText = songs[index-1].songName
    // songElement.play()
    // document.getElementById('img').src = songs[index-1].songCover
  })
})

forward.addEventListener('click', () => {
  if (index>=10){
    index = 1
  }
  else{
    index+=1
  }
  play_settings();
  MakeAllPlays()
    songItemPlay[index-1].classList.remove('fa-play')
    songItemPlay[index-1].classList.add('fa-pause')
  // songElement.src =`songs/${index}.mp3`
  // songElement.currentTime=0
  // bottomSongName.innerText = songs[index-1].songName
  // document.getElementById('img').src = songs[index-1].songCover
  // songElement.play()
  // masterPlay.classList.remove('fa-play')
  // masterPlay.classList.add('fa-pause')
})


backward.addEventListener('click', () => {
  if (index<=1){
    index = 1
  }
  else{
    index-=1
  }
  play_settings()
  MakeAllPlays()
  // songElement.src = `songs/${index}.mp3`
  // songElement.currentTime=0
  // bottomSongName.innerText = songs[index-1].songName
  // document.getElementById('img').src = songs[index-1].songCover
  // songElement.play()
  // masterPlay.classList.remove('fa-play')
  // masterPlay.classList.add('fa-pause')
    songItemPlay[index-1].classList.remove('fa-play')
    songItemPlay[index-1].classList.add('fa-pause')
})

const play_settings =()=>{
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    songElement.src = `songs/${index}.mp3`
    songElement.currentTime = 0
    bottomSongName.innerText = songs[index-1].songName
    
    songElement.play()
    document.getElementById('img').src = songs[index-1].songCover
}