const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const indicator = document.getElementById("study-or-break");
const addTime = document.getElementById("add-time");
const subTime = document.getElementById("sub-time");
const addBreak = document.getElementById("addbreak");
const subBreak = document.getElementById("subbreak");
const showStudy = document.getElementById("showStudy");
const showBreak = document.getElementById("showBreak");



let initalTime = 1500;
let interval;
let breaks = 0;
let studyTime = 0;
let timeLeft = initalTime;
let breakTime = 300;
let longBreakTime = 1800;
let rounds = 0;

timer.innerHTML = initalTime;
updateTimer()
function updateTimer() {
    let min = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${min.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
    timer.innerHTML = formattedTime;
}

function runTimer(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval)
            alert("Time's up!");
            
        }
    }, 1000)
}


function main(){
        if(rounds !== 3){
                if (studyTime === breaks){
                    indicator.innerHTML = "Study Time! 📖"
                    runTimer()
                    
                
                if(timeLeft === 0){
                    rounds++
                    studyTime++
                    timeLeft = breakTime
                    
                } 
                    
                
                
            } else if (studyTime > breaks){
                indicator.innerHTML = "Break Time! 😌"
                runTimer()
                
                }
                if(timeLeft === 0){
                    breaks++
                    timeLeft = initalTime
                    

             
            }
        }else{
            timeLeft = longBreakTime
            indicator.innerHTML = "Long Break! 😴"
            runTimer()
            
            if(timeLeft === 0){
                rounds = 0
                breaks++
                timeLeft = initalTime
                
            }
    }
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    clearInterval(interval)
    timeLeft = initalTime
    rounds = 0;
    studyTime = 0;
    breaks = 0;
    updateTimer()
}

start.addEventListener("click", main);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
