import config from "/src/data/config.json" assert {type: "json"};

const appStore = () => {
    const appstore = document.querySelector('.download__btn');
    appstore.href = config.appStoreLink;
}
export { appStore };
