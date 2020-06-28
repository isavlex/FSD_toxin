import { getSchedule } from "../../components/impressions/impressions";
import { showMenu } from "../../components/header/header";
require("../../components/calendar/datepicker.js");
import { howMany } from "../../components/dropdown/dropdown";
import {setMask} from "../../components/text-field/textFieldMask";


// getSchedule("circle-schedule", {"#6FCF97": 25, "#FFE39C": 50, "#BC9CFF": 25});
let orange = ["#FFE39C", "#FFBA9C"];
let green = ["#6FCF97", "#66D2EA"];
let violet = ["#BC9CFF", "#8BA4F9"];
let black = ["#919191", "#3D4975"];

getSchedule("circle-schedule", [{25: green}, {50: orange}, {25: violet}]);




//menu

showMenu();

//datepickers
$(document).ready(function () {
    //cards-example
    $('.dropdown__heading--from-cards-example').datepicker({
        altField: '.dropdown__heading--to-cards-example',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        onSelect: function (fd, dates, inst) {
            var firstInput = $('.dropdown__heading--from-cards-example');
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
    $('.dropdown__heading--to-cards-example').datepicker({
        altField: '.dropdown__heading--from-cards-example',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        position: "bottom right",
        onSelect: function (fd, dates, inst) {
            var firstInput = $(this.altField);
            var secondInput = $('.dropdown__heading--to-cards-example');
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

//dropdown

howMany("dropdown--example22");


//masks
setMask("text-field__subscription--catch", "email");