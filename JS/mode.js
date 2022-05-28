

document.addEventListener('DOMContentLoaded', function() {
    
    const modeElem = document.querySelector(".mode");
    const modeTitle = document.querySelector("#modetitle");
    const modeSpanElem = document.querySelector(".mode__title-word_color-yellow");
    const lightModeBtnElem = document.querySelector(".mode__light-theme");
    const darkModeBtnElem = document.querySelector(".mode__dark-theme");
    
    const toggleMode = () => {
        modeElem.classList.toggle("mode_theme-dark");
        modeElem.classList.toggle("mode_theme-light"); 
    }
    lightModeBtnElem.addEventListener('click', function(){
        if(modeElem.classList.contains("mode_theme-dark")){
            toggleMode();
            modeSpanElem.textContent = "light";
            modeTitle.textContent = "light mode";
        }
    });
    darkModeBtnElem.addEventListener('click', function(){
        if(modeElem.classList.contains("mode_theme-light")){
            toggleMode();
            modeSpanElem.textContent= "dark";
            modeTitle.textContent = "dark mode";
        }
    })
});