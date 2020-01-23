var jquery = require("jquery");
window.$ = window.jQuery = jquery; 
require("../../components/calendar/datepicker.js");

import {toggleClass} from "../../components/dropdown/dropdown";
import {setMask} from "../../components/text-field/textFieldMask";



$(document).ready(function () {
    

    $('.selection__choice--arrival, .selection__choice--departure').datepicker({
        altField: '.selection__choice--departure',
        multipleDatesSeparator: ' ',
        range: true,
        clearButton: true,
        confirmButton: true,
        onSelect: function (fd, dates, inst) {
            var firstInput = $('.selection__choice--arrival');
            var secondInput = $(this.altField);
            var first, second;

            dates.forEach(function (date, index) {

                let rightDate = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate(); 
                let rightMonth = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
                if(index == 0) {
                    first = rightDate + "." + rightMonth + "." + date.getFullYear();
                } else {
                    second = rightDate + "." + rightMonth + "." + date.getFullYear();
                }                      
            })
            
            firstInput.val(first);
            secondInput.val(second);
        }
        
    });
        
    
});


// toggleClass(".dropdown__heading", ".dropdown__wrap", "dropdown__wrap--active");
// setMask('text-field__input--masked-date');
// setMask('text-field__input--masked-email', 'email');