require("../../components/calendar/datepicker.js");
import { howMany } from "../../components/dropdown/dropdown";
import {setMask} from "../../components/text-field/textFieldMask";

setMask('example__dob');

howMany("cards__example");
$(document).ready(function () {
    $('.dropdown__heading--from-reservation').datepicker({
        altField: '.dropdown__heading--to-reservation',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        onSelect: function (fd, dates, inst) {
            var firstInput = $('.dropdown__heading--from-reservation');
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
    $('.dropdown__heading--to-reservation').datepicker({
        altField: '.dropdown__heading--from-reservation',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        position: "bottom right",
        onSelect: function (fd, dates, inst) {
            var firstInput = $(this.altField);
            var secondInput = $('.dropdown__heading--to-reservation');
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