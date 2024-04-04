const moon = document.querySelector(".fa-solid.fa-moon");
const sun = document.querySelector(".fa-solid.fa-sun");
const navBtn = document.querySelector('a');
const navFocus = document.querySelector('.nav-focus')


moon.addEventListener("click", darkMode)
sun.addEventListener("click", lightMode)


function darkMode(navHover, navNoHover){
    document.body.style.backgroundImage = "url(images/wallpaperlofi2.jpg)"
    navFocus.style.backgroundColor = "rgba(22, 22, 36, 0.2)"
    navBtn.style.color = "rgb(255, 255, 255)"
    document.body.style.transition = "200ms ease-in"
    moon.style.display = "none"
    sun.style.display = "block"  
}

function lightMode(){
    document.body.style.backgroundImage = "url(images/backgroundlofi.jpg)"
    navFocus.style.backgroundColor = "rgba(47, 72, 66, 0.2)"
    navBtn.style.color = "rgb(255, 255, 255)";
    sun.style.display = "none"
    moon.style.display = "block"
}


// STOPWATCH //

const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId = 0
let hrs = 0
let min = 0
let sec = 0

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000)
    }
})
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now()-startTime;
        clearInterval(intervalId)
    }
})
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    min = 0
    sec = 0
    timeDisplay.textContent = "00:00:00"
})


function updateTime(){
    elapsedTime = Date.now() - startTime;

    sec = Math.floor(elapsedTime/1000 % 60)
    min = Math.floor((elapsedTime/(1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime/(1000 * 60 * 60)) % 60)

    sec = pad(sec);
    min = pad(min);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${min}:${sec}`

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}