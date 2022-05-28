

document.addEventListener('DOMContentLoaded', function() {
    
   
    const modeElem = document.querySelector(".mode");
    const modeTitleElem = document.querySelector(".mode__title-l1_margin");
    const modeTitle2Elem = document.querySelector(".mode__title-l2_margin");
    const modeDescElem = document.querySelector(".mode__description");
    const modeSpanElem = document.querySelector(".mode__title-word_color-yellow");
    const moonIconSpanElem = document.querySelector(".mode__dark-theme span");
    const sunIconSpanElem = document.querySelector(".mode__light-theme span");

    const lightModeBtnElem = document.querySelector(".mode__light-theme");
    const darkModeBtnElem = document.querySelector(".mode__dark-theme");
    
    const toggleMode = () => {
        modeElem.classList.toggle("mode_theme-dark");
        modeElem.classList.toggle("mode_theme-light"); 
        modeTitleElem.classList.toggle("title-l1_theme-dark");
        modeTitleElem.classList.toggle("title-l1_theme-light");
        modeTitle2Elem.classList.toggle("title-l2_theme-dark");
        modeTitle2Elem.classList.toggle("title-l2_theme-light");
        modeDescElem.classList.toggle("mode__description_theme-dark");
        modeDescElem.classList.toggle("mode__description_theme-light");
        moonIconSpanElem.classList.toggle("mode__title_yellow");
        moonIconSpanElem.classList.toggle("title-l1_theme-light");
        sunIconSpanElem.classList.toggle("mode__title_yellow");
        sunIconSpanElem.classList.toggle("title-l1_theme-dark");
    }
    lightModeBtnElem.addEventListener('click', function(){
        if(modeElem.classList.contains("mode_theme-dark")){
            toggleMode();
            modeSpanElem.textContent = "light";
            document.querySelector(".mode__sun").setAttribute("src", "./src/icons/sun-yellow.svg");
            document.querySelector(".mode__moon").setAttribute("src", "./src/icons/moon-black.svg");
        }
    });
    darkModeBtnElem.addEventListener('click', function(){
        if(modeElem.classList.contains("mode_theme-light")){
            toggleMode();
            modeSpanElem.textContent= "dark";
            document.querySelector(".mode__sun").setAttribute("src", "./src/icons/sun-white.svg");
            document.querySelector(".mode__moon").setAttribute("src", "./src/icons/moon-yellow.svg");
        }
    })
});