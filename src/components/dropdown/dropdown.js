function toggleClass(elClick, elToggle, addClass) {
    let elementClick = document.querySelector(elClick);
    let elementToggle = document.querySelector(elToggle);
    elementClick.addEventListener("click", function () {
        elementToggle.classList.toggle(addClass);
    });
}

export {toggleClass};
// toggleClass(".dropdown__heading", ".dropdown__wrap", "dropdown__wrap--active");