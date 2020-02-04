function showHide (arg) {
    let clickElement = document.querySelectorAll(arg.clickEl);
    
    clickElement.forEach(element => {
        let showHideEl = element.parentElement.querySelector(arg.showHideEl);
        element.addEventListener("click", () => {
            element.classList.toggle(arg.toggleClass);
            showHideEl.classList.toggle(arg.showHideToggleClass)
            // if (showHideEl.style.display == "none" || showHideEl.style.display == "") {
                
            //     showHideEl.style.display = "block";
            // } else {
            //     showHideEl.style.display = "none";
            // }
            
        })
    });
    

}


export {showHide};