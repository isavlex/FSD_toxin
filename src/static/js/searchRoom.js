import { howMany } from "../../components/dropdown/dropdown";
require("../../components/calendar/datepicker.js");
import noUiSlider from "nouislider/distribute/nouislider";

//dropdown-guests
howMany("dropdown--guests-search");
howMany("dropdown--options-search");

//datepicker
$(document).ready(function () {
    //dropdown filter
    $('.dropdown__heading--filtered').datepicker({
        range: true,
        monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        multipleDatesSeparator: ' - ',
        dateFormat: 'dd M',
    })
});

//start-nouislider
let myRangeSlider = document.getElementById("search-rslider");

let snapValues = [
    document.getElementById("search-rslider__vfirst"),
    document.getElementById("search-rslider__vsecond")
]


noUiSlider.create(myRangeSlider, {
    start: [5000, 10000],
    snap: false,
    step: 100,
    connect: true,
    range: {
        'min': 900,
        'max': 15000
    }
})

myRangeSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = Math.round(values[handle]) + "₽";
});
