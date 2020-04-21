require("../../components/calendar/datepicker.js");
import { howMany } from "../../components/dropdown/dropdown";
import {setMask} from "../../components/text-field/textFieldMask";

//datepickers
$(document).ready(function () {
    //landing
    $('.dropdown__heading--from-landing').datepicker({
        altField: '.dropdown__heading--to-landing',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        onSelect: function (fd, dates, inst) {
            var firstInput = $('.dropdown__heading--from-landing');
            var secondInput = $(this.altField);
            var first, second;
            dates.forEach(function (date, index) {

                let rightDate = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
                let rightMonth = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
                if (index == 0) {
                    first = rightDate + "." + rightMonth + "." + date.getFullYear();
                } else {
                    second = rightDate + "." + rightMonth + "." + date.getFullYear();
                }
            })

            firstInput.val(first);
            secondInput.val(second);
        }
    });
    $('.dropdown__heading--to-landing').datepicker({
        altField: '.dropdown__heading--from-landing',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        position: "bottom right",
        onSelect: function (fd, dates, inst) {
            var firstInput = $(this.altField);
            var secondInput = $('.dropdown__heading--to-landing');
            var first, second;
            console.log($(this))
            dates.forEach(function (date, index) {

                let rightDate = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
                let rightMonth = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
                if (index == 0) {
                    first = rightDate + "." + rightMonth + "." + date.getFullYear();
                } else {
                    second = rightDate + "." + rightMonth + "." + date.getFullYear();
                }
            })

            firstInput.val(first);
            secondInput.val(second);
        }
    })
});


//dropdowns
howMany("dropdown--landing");

//masks
setMask("text-field__subscription--catch", "email");

//events


function showHideCards () {
    let headerLogin = document.querySelector(".header__login");
    let cardLogin = document.querySelector(".card--login");
    let cardRegister = document.querySelector(".card--register");
    let cardSelection = document.querySelector(".card--selection");

    function headerButtonsHandler (e) {
        let action = e.target.dataset.action;

        //click on loginButton
        if (action == "login") {
            // console.log(loginButton)
            cardSelection.classList.toggle("card--deactive");
            cardLogin.classList.toggle("card--deactive");
        }
        console.log(e.target.dataset)
    }

    headerLogin.addEventListener("click", headerButtonsHandler);
    
}

showHideCards();