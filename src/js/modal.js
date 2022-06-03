import config from "/src/data/config.json" assert {
    type: "json"
};

function modalInit() {
    const plans = [...config.plans];
    const modal = document.querySelector(".modal");
    const closeCrossBtn = document.querySelector(".modal_close");
    const inputBox = document.querySelectorAll(".input");
    const form = document.querySelector(".request");

    function isValid(value) {
        if (value === "") {
            let obj = {
                valid: false,
                error: "required field"
            };
            return obj;
        }
        if (value.length <= 3) {
            let obj = {
                valid: false,
                error: "should be more then 3 symbols"
            };
            return obj;
        }
        return {
            valid: true,
            error: ""
        };
    }

    function setRadioInputTitle(plans) {
        const radioLabel = document.querySelectorAll(".radio__label");

        for (let i = 0; i < radioLabel.length; i++) {
            radioLabel[i].textContent = plans[i].name;
        }
    }

    function getDateFromForm() {
        let object = {}
        for (let item of form) {
            if (item.type === "text" || item.type === "email") {
                object[item.name] = item.value;
            }
            if (item.type === "radio" && item.checked) {
                object[item.name] = item.nextElementSibling.textContent;
            }
            if (item.type === "checkbox" && item.checked) {
                object[item.name] = "on";
            }
        }
        console.log(object);
    }

    function Animation() {
        const checkBox = document.querySelectorAll(".checkbox__input");
        for (let item of checkBox) {
            item.classList.toggle("checkbox_error");
        }
    }

    function checkFormIsValid() {
        const checkBox = document.querySelectorAll(".checkbox__input");
        let formValid = true;
        let checked = false;
        for (let item of inputBox) {
            const validResult = isValid(item.value);
            if (!validResult.valid) {
                item.classList.add("input-error");
                item.classList.remove("input-valid");
                item.nextElementSibling.textContent = validResult.error;
                formValid = false;
            }
        }
        for (let item of checkBox) {
            if (item.checked === true) {
                checked = true;
            }
        }
        if (checked === false) {
            Animation();
            setTimeout(Animation, 1000);
            formValid = false;
        }
        return formValid;
    }

    function closeModal() {
        modal.classList.add("modal_hide");
        modal.classList.remove("modal_show");
    }

    setRadioInputTitle(plans);


    for (let item of inputBox) {
        item.addEventListener('focusout', function (e) {
            const itemCheckIsValid = isValid(e.target.value);
            if (!itemCheckIsValid.valid) {
                e.target.classList.add("input-error");
                e.target.classList.remove("input-valid");
                document.querySelector(`[for="${e.target.id}"]`).textContent = itemCheckIsValid.error;
            }
        })
    }

    for (let item of inputBox) {
        item.addEventListener('focus', function (e) {
            e.target.classList.remove("input-error");
            e.target.classList.add("input-valid");
            document.querySelector(`[for="${e.target.id}"]`).textContent = "";
        })
    }

    closeCrossBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    })

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const check = checkFormIsValid();
        if (check) {
            const loading = document.querySelector(".loading");
            loading.classList.remove('loading_hide');
            loading.classList.add('loading_show');
            setTimeout(function () {
                loading.classList.remove('loading_show');
                loading.classList.add('loading_hide');
                getDateFromForm();
            }, 2000);
        }
    })
};
export {
    modalInit
};