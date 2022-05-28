import config from "/src/data/config.json" assert {type: "json"};

document.addEventListener('DOMContentLoaded', function() {
   
    const timer = config.timerEndDate.split(/\s|\.|\:/);
    let timerId = null;
    const timerElement = document.querySelector('.timer');

    function addZero(number){
        if(number <= 9 && number > 0 ) return "0" + number;
        return number;
    }

    function calcTime(timer) { 
        const deadlineDate = new Date(timer[2], timer[1]-1, timer[0], timer[3], timer[4]);
        const differenceTime = deadlineDate.getTime() - Date.now();
        
        if(differenceTime>0){
            const days = addZero(Math.floor( differenceTime / 1000 / 60 / 60 / 24));
            const hours =addZero(Math.floor( differenceTime / 1000 / 60 / 60 % 24));
            const minutes = addZero(Math.floor( differenceTime / 1000 / 60) % 60);
            const seconds = addZero(Math.floor(differenceTime / 1000) % 60);
            let clock = {
                timeOut: false,
                days,
                hours,
                minutes,
                seconds
            }
            return clock;
        } else {
            let clock = {timeOut: true};
            return clock;
        }
      
    }

    function countdownTimer() {
        const clock = calcTime(timer);
        if(!clock.timeOut){
            document.querySelector("#days").textContent = clock.days;
            document.querySelector("#hours").textContent = clock.hours;
            document.querySelector("#minutes").textContent = clock.minutes;
            document.querySelector("#seconds").textContent = clock.seconds;
            timerElement.classList.remove("timer_hide");
            timerElement.classList.add("timer_show");
        } else {
            clearInterval(timerId);
            timerElement.classList.remove("timer_show");
            timerElement.classList.add("timer_hide");
        }
    }

    timerId = setInterval(countdownTimer, 1000);
});