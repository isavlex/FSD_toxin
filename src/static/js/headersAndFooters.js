//menu
function showMenu () {
    let burger = document.querySelector(".burger");

    function burgerHandler (e) {
        let menu = document.querySelector(".menu");
        let burgerLayers = document.querySelector(".burger__layers");
        let headerLogin = document.querySelector(".header__login");
        burgerLayers.classList.toggle("burger__layers--disclosed");
        menu.classList.toggle("menu--active");
        headerLogin.classList.toggle("header__login--active");
    }
    burger.addEventListener("click", burgerHandler);
}

showMenu();