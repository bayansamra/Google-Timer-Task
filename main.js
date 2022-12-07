const timerBtn = document.querySelector('.timer-btn')
const stopBtn = document.querySelector('.stop-btn')

const timerCounter = document.querySelector('.timer-count')
const stopCounter = document.querySelector('.stop-count')

const startBtn = document.querySelector('.start-btn') 
const timerStopBtn = document.querySelector('.stop-btn-time') 
const resetBtn = document.querySelector('.reset-btn') 

const timerMinutes = document.querySelector('.timer-min')
const timerSeconds = document.querySelector('.timer-sec')
const stopSeconds = document.querySelector('.stop-sec')
const stopMSeconds = document.querySelector('.stop-mSec')

const volumeIcon = document.querySelector('.fa-volume-low')
const timeline = document.querySelector('.linetime')


// stop watch tap button
stopBtn.addEventListener('click',()=>{
    stopBtn.classList.add('active')
    timerBtn.classList.remove('active')

    timerCounter.style.display = 'none'
    stopCounter.style.display = 'block'
    volumeIcon.style.display = 'none'
    timeline.style.display = 'none'
})

// timer tap button
timerBtn.addEventListener('click',()=>{
    timerBtn.classList.add('active')
    stopBtn.classList.remove('active')

    stopCounter.style.display = 'none'
    timerCounter.style.display = 'block'
    volumeIcon.style.display = 'inline-block'
    timeline.style.display = 'block'
})

// setInterval declerations 
let timerInterval;
let counterInterval;

startBtn.addEventListener('click',()=>{
    // changes on timer when we click start button
    if(timerBtn.classList[1] === 'active'){
        startBtn.style.display = 'none'
        timerStopBtn.style.display = 'inline-block'
        let timeLineWidth = timeline.offsetWidth;
        timerCounter.style.borderBottom = 'none'
        timerInterval = setInterval(()=>{
            if(timerSeconds.textContent == 00 && timerMinutes.textContent == 0){
                clearInterval(timerInterval)
            }else if(timerSeconds.textContent == 00){
                timerSeconds.textContent = 59;
                timerMinutes.textContent = timerMinutes.textContent-1
                timeLineWidth = timeLineWidth+2.03;
                timeline.style.width = `${timeLineWidth}px`

            }else{
                timerSeconds.textContent-=1;
                timeLineWidth = timeLineWidth+2.03;
                timeline.style.width = `${timeLineWidth}px`
            }
        },1000)
    }

    // changes on stop watch when we click start button
    if(stopBtn.classList[1] === 'active'){
        startBtn.style.display = 'none'
        timerStopBtn.style.display = 'inline-block'
        counterInterval = setInterval(()=>{
            if(stopMSeconds.textContent < 99){
                stopMSeconds.textContent = Number(stopMSeconds.textContent)+1;
            }else{
                stopSeconds.textContent = Number(stopSeconds.textContent)+1;
                stopMSeconds.textContent = 0;
                stopMSeconds.textContent = stopMSeconds.textContent +1;
            }
        },10)
    }
})

timerStopBtn.addEventListener('click',()=>{
    // stoping timer events when clicking stop button
    if(timerBtn.classList[1] === 'active'){
        clearInterval(timerInterval)
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
        timerCounter.style.borderBottom = '2px solid #303135'
    }

    // stoping stop watch events when clicking stop button
    if(stopBtn.classList[1] === 'active'){
        clearInterval(counterInterval)
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
    }
})

resetBtn.addEventListener('click',()=>{
    // reseting timer when clicking reset button
    if(timerBtn.classList[1] === 'active'){
        clearInterval(timerInterval)
        timerMinutes.textContent = 5;
        timerSeconds.textContent = '00';
        timeline.style.width = 0;
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
        timerCounter.style.borderBottom = '2px solid #303135'
    }

    // reseting stop watch when clicking reset button
    if(stopBtn.classList[1] === 'active'){
        clearInterval(counterInterval)
        stopSeconds.textContent = 0;
        stopMSeconds.textContent = '00';
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
    }
})