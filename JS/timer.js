
document.addEventListener('DOMContentLoaded', function() {
    const timerEndDate = "22.05.2022 12:18";
    const deadline = timerEndDate.substring(3,5)+'.'+timerEndDate.substring(0,2)+timerEndDate.substring(5);
    const deadlineDate = new Date(deadline);
    const clockElements = document.getElementsByClassName('timer__clock-item');
    const timerElement = document.querySelector('.timer');
    let timerId = null;

    function countdownTimer() {
        const differenceTime = deadlineDate.getTime() - Date.now();
        if(differenceTime>0){
            const days = Math.floor( differenceTime / 1000 / 60 / 60 / 24);
            const hours = Math.floor( differenceTime / 1000 / 60 / 60 % 24);
            const minutes = Math.floor( differenceTime / 1000 / 60) % 60;
            const seconds = Math.floor(differenceTime / 1000) % 60;
            for(let i=0; i<clockElements.length; i++){
                if(i===0) clockElements[i].textContent = days;
                else if(i===2) clockElements[i].textContent = hours;
                else if(i===4) clockElements[i].textContent = minutes;
                else if(i===6) clockElements[i].textContent = seconds;
            }
           
        } else {
            clearInterval(timerId);
            timerElement.classList.remove("timer_show");
            timerElement.classList.add("timer_hide");
        }
    }
    
    timerId = setInterval(countdownTimer, 1000);
});