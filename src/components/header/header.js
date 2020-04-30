//menu
function showMenu () {
    let burger = document.querySelector(".burger");

    function burgerHandler (e) {
        let menu = document.querySelector(".menu");
        let headerMenu = document.querySelector(".header__menu");
        let burger = document.querySelector(".burger");
        let burgerLayers = document.querySelector(".burger__layers");
        let headerLogin = document.querySelector(".header__login");
        menu.classList.toggle("menu--active");
        burger.classList.toggle("burger--disclosed");
        burgerLayers.classList.toggle("burger__layers--disclosed");
        headerMenu.classList.toggle("header__menu--active");
        headerLogin.classList.toggle("header__login--active");
    }
    burger.addEventListener("click", burgerHandler);
}

export {showMenu};