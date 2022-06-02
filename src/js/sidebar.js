function sidebarInit() {
    
    const burger = document.querySelector(".burger");
    const sidebar = document.querySelector(".sidebar");
    const sidebarClose = document.querySelectorAll(".sidebar_close");

    burger.addEventListener("click", function(){
        sidebar.classList.remove("sidebar_hide");
        sidebar.classList.add("sidebar_show");
    })

    for(let item of sidebarClose){
        item.addEventListener("click", function(){
            sidebar.classList.remove("sidebar_show");
            sidebar.classList.add("sidebar_hide");
        })
    }
};
export { sidebarInit };