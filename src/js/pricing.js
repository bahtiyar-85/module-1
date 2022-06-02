import config from "/src/data/config.json" assert {type: "json"};

function pricingValueInit() {
    const priceTitle = document.querySelectorAll(".price__title");
    const priceValue = document.querySelectorAll(".price__value");
    const buyNow = document.querySelectorAll(".open-modal");
    const modal = document.querySelector(".modal");

    function setMaxPriceRadioInput(plans){
        const radioInput = document.querySelectorAll(".radio__input");
        let max = 0;
        let maxIndex = 0;
        for(let i=0; i<radioInput.length; i++){
            if(plans[i].price > max ){
                max = plans[i].price;
                maxIndex = i;
            }
        }
        radioInput[maxIndex].checked = true;
    }

    function setDefaultValues(){
        const inputBoxs = document.querySelectorAll(".input");
        const checkBoxs = document.querySelectorAll(".checkbox__input");
        for(let item of inputBoxs){
            item.value = "";
            item.classList.remove("input-error");
            item.classList.add("input-valid");
            item.nextElementSibling.textContent = "";         
        }
        for(let item of checkBoxs){
            item.checked = false;       
        }
    }
    function handleButtonClick(elem){
        if(elem.classList.contains('price__btn_color-blue')){
            document.querySelector("#radio1").checked = true;
        } else if(elem.classList.contains('price__btn_color-red')){
            document.querySelector("#radio2").checked = true;
        } else if(elem.classList.contains('price__btn_color-yellow')){
            document.querySelector("#radio3").checked = true;
        } else setMaxPriceRadioInput(config.plans);
    
    }

    for(let i=0; i<priceTitle.length; i++){
        priceTitle[i].textContent = config.plans[i].name;
        priceValue[i].textContent = "$" + config.plans[i].price;
    }

    for(let item of buyNow){
        item.addEventListener('click', function(e){
            handleButtonClick(e.target);
            setDefaultValues();
            modal.classList.add("modal_show");
            modal.classList.remove("modal_hide");
        })
    }
};
export { pricingValueInit };
