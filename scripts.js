console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio('file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "The World Hurt Me", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/1.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/2.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/3.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/4.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/5.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/6.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/7.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/8.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/9.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/10.mp3", coverPath: "file:///C:/Users/asus/Desktop/spotify/Spotify%20Clone/covers/10.jpg"},
]

/*
songItems.forEach((element)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})*/
 

//audioElement.play

//handle play/pause click
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused||audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
    
        else
    { 
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }

})





//listen to events
audioElement.addEventListener('timeupdate',()=>{
  // console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays =()=>
        {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
           element.target.classList.add('fa-play-circle');
            element.target.classList.remove('fa-pause-circle');
           })


}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
       element.addEventListener('click',()=>{
       console.log(e.target);
       makeAllPlays();
       index =parseInt(e.target.id);
       e.target.classList.add('fa-play-circle');
       e.target.classList.remove('fa-pause-circle');
       audioElement.src=' file:///C:/Users/asus/Desktop/Spotify%20Clone/songs/1.mp3';
       audioElement.currentTime=0;
       audioElement.play;
       //masterPlay.classList.remove('fa-play-circle');
       //masterPlay.classList.add('fa-pause-circle');
    })
})
/*
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
    */