
document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let timerId = null;
    const clockElements = document.getElementsByClassName('timer__clock-item');
    const timerElement = document.querySelector('.timer');

    async function getData() {
        const response = await fetch('./src/data/config.json');
        return await response.json();
    }

    function calcTime(timer) { 
       
        const deadlineDate = new Date(timer[2], timer[1]-1, timer[0], timer[3], timer[4]);
        const differenceTime = deadlineDate.getTime() - Date.now();
        
        if(differenceTime>0){
            const days = Math.floor( differenceTime / 1000 / 60 / 60 / 24);
            const hours = Math.floor( differenceTime / 1000 / 60 / 60 % 24);
            const minutes = Math.floor( differenceTime / 1000 / 60) % 60;
            const seconds = Math.floor(differenceTime / 1000) % 60;
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
            for(let i=0; i<clockElements.length; i++){
                if(i===0) clockElements[i].textContent = clock.days;
                else if(i===2) clockElements[i].textContent = clock.hours;
                else if(i===4) clockElements[i].textContent = clock.minutes;
                else if(i===6) clockElements[i].textContent = clock.seconds;
            }
        } else {
            clearInterval(timerId);
            timerElement.classList.remove("timer_show");
            timerElement.classList.add("timer_hide");
        }
    }

    getData()
    .then((data) => {
        timer = data.timerEndDate.split(/\s|\.|\:/);
        timerId = setInterval(countdownTimer, 1000);
    });
    
});