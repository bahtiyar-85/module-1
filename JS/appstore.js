import config from "/src/data/config.json" assert {type: "json"};

document.addEventListener('DOMContentLoaded', function() {
    const appstore = document.querySelector('.download__btn');
    appstore.href = config.appStoreLink;
});