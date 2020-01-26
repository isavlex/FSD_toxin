require("../../components/calendar/datepicker.js");
import { toggleClass, howManyGuests } from "../../components/dropdown/dropdown";


toggleClass(".dropdown__heading", ".dropdown__wrap", "dropdown__wrap--active");
howManyGuests();
$(document).ready(function () {
    $('.dropdown__heading--from-reservation, .dropdown__heading--to-reservation').datepicker({
        altField: '.dropdown__heading--to-reservation',
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
            
        },
        
    });
});