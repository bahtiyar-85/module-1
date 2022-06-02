
    function modeChangeInit() {
        const modeElem = document.querySelector(".mode");
        const modeTitle = document.querySelector("#modetitle");
        const modeSpanElem = document.querySelector(".mode__title-word_color-yellow");
        const lightModeBtnElem = document.querySelector(".mode__light-theme");
        const darkModeBtnElem = document.querySelector(".mode__dark-theme");
        
        const toggleMode = () => {
            modeElem.classList.toggle("mode_theme-dark");
            modeElem.classList.toggle("mode_theme-light"); 
        }

        const changeTextContent = (title) => {
            modeSpanElem.textContent = title;
            modeTitle.textContent = `${title} mode`;
        }

        lightModeBtnElem.addEventListener('click', function(){
            if(modeElem.classList.contains("mode_theme-dark")){
                toggleMode();
                changeTextContent("light");
            }
        });
        
        darkModeBtnElem.addEventListener('click', function(){
            if(modeElem.classList.contains("mode_theme-light")){
                toggleMode();
                changeTextContent("dark");
            }
        })
    }
    export { modeChangeInit };