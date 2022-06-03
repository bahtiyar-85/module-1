import config from "/src/data/config.json" assert {type: "json"};

function  timerInit() {
    const timer = config.timerEndDate.split(/\s|\.|\:/);
    let timerId = null;
    const timerElement = document.querySelector('.timer');

    function addZero(number){
        return number.toString().padStart(2, "0");
    }

    function calcTime(timer) { 
        const [days, months, years, minutes, seconds] = timer;
        const deadlineDate = new Date(years,  months-1, days, minutes, seconds);
        const differenceTime = deadlineDate.getTime() - Date.now();
        
        if(differenceTime > 0){
            const days = addZero(Math.floor( differenceTime / 1000 / 60 / 60 / 24));
            const hours = addZero(Math.floor( differenceTime / 1000 / 60 / 60 % 24));
            const minutes = addZero(Math.floor( differenceTime / 1000 / 60) % 60);
            const seconds = addZero(Math.floor(differenceTime / 1000) % 60);
            const clock = {
                days,
                hours,
                minutes,
                seconds
            }
            return clock;
        } else  return 0;
      
    }

    function countdownTimer() {
        const clock = calcTime(timer);
        if(clock){
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

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);        
}
export { timerInit };
