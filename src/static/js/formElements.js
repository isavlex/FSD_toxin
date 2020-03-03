require("../../components/calendar/datepicker.js");
import { howMany } from "../../components/dropdown/dropdown";
import pagination from "paginationjs/dist/pagination";
import noUiSlider from "nouislider/distribute/nouislider";

howMany();

//start-pagination



//end-pagination

function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        html += '<li>'+ item +'</li>';
    });
    html += '</ul>';
    return html;
}

$('#example-pagination').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    locator: 'items',
    totalNumber: 15,
    pageSize: 1,
    pageRange: 1,
    showPrevious: false,
    showNext: true,
    nextText: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="white"/></svg>',
    // callback: function(data, pagination) {
    //     // template method of yourself
    //     var html = simpleTemplating(data);
    //     $('#data-container').html(html);
    // }
})

//start-nouislider
let myRangeSlider = document.getElementById("fe-rslider");

let snapValues = [
    document.getElementById("fe-rslider__vfirst"),
    document.getElementById("fe-rslider__vsecond")
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
//end-nouislider

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
    $('.dropdown--super-filter .dropdown__heading--filtered').datepicker({
        dateFormat: "dd M",
        range: true,
        multipleDatesSeparator: " - ",
        clearButton: true,
        confirmButton: true,
        
    });
});