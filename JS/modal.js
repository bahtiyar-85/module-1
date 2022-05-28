import config from "/src/data/config.json" assert {type: "json"};

document.addEventListener('DOMContentLoaded', function() {
    const plans = [ ...config.plans];
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal_close");
    const inputBox = document.querySelectorAll(".input");
    const form = document.querySelector(".request");

    function firstLetterToUp(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function isValid(value){
        if(value === "") {
            let obj = {valid: false, error: "required field"};
            return obj;
        }
        if(value.length <= 3) {
            let obj = {valid: false, error: "should be more then 3 symbols"};
            return obj;
        }
        return {valid: true, error: ""};
    }
    
    function setRadioInputTitle(plans){
        const radioLabel = document.querySelectorAll(".radio__label");

        for(let i=0; i<radioLabel.length; i++){
            radioLabel[i].textContent = firstLetterToUp(plans[i].name);
        }
    }

  
    
    function getDateFromForm(){
        let data = [];
        for(let item of form){
            if(item.type==="text" || item.type==="email"){
                let obj = {
                    name: item.name,
                    id: item.id,
                    value: item.value,
                    type: item.type
                }
                data.push(obj);
            }
            if(item.type==="radio" && item.checked || item.type==="checkbox" && item.checked){
                let obj = {
                    name: item.name,
                    id: item.id,
                    checked: item.checked,
                    type: item.type
                }
                data.push(obj);
            }
        }
        console.log(data);
    }

    function checkFormIsValid(){
        const checkBox = document.querySelectorAll(".checkbox__input");
        let formValid = true;
        let checked = false;
        for(let item of inputBox){
            const itemCheckIsValid = isValid(item.value);
            if(!itemCheckIsValid.valid){
                item.classList.remove("input-error");
                item.classList.add("input-valid");
                item.nextElementSibling.textContent = itemCheckIsValid.error;  
                formValid = false;
            }             
        }
        for(let item of checkBox){
            if(item.checked === true){
                checked = true;
            }
        }
        if(checked === false){
            alert('You must select at least 1 item!');
            formValid = false;
        }
        return formValid;
    }

    setRadioInputTitle(plans);

    modalClose.addEventListener("click", function(){
        modal.classList.add("modal_hide");
        modal.classList.remove("modal_show");
    })

    for(let item of inputBox){
        item.addEventListener('focusout', function(e){
            const itemCheckIsValid = isValid(e.target.value);
            if(!itemCheckIsValid.valid){
                e.target.classList.add("input-error");
                e.target.classList.remove("input-valid");
                document.querySelector(`[for="${e.target.id}"]`).textContent = itemCheckIsValid.error;               
            }
        })
    }

    for(let item of inputBox){
        item.addEventListener('focus', function(e){
            e.target.classList.remove("input-error");
            e.target.classList.add("input-valid");
            document.querySelector(`[for="${e.target.id}"]`).textContent = "";               
        })
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const check = checkFormIsValid();
        if(check){
            const loading = document.querySelector(".loading");
            loading.classList.remove('loading_hide');
            loading.classList.add('loading_show');
            setTimeout(function(){
                loading.classList.remove('loading_show');
                loading.classList.add('loading_hide');
                getDateFromForm();
            } , 2000);
        } 
    })
  
});