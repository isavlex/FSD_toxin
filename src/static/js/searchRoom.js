import { howMany } from "../../components/dropdown/dropdown";
import { showMenu } from "../../components/header/header";
require("../../components/calendar/datepicker.js");
import noUiSlider from "nouislider/distribute/nouislider";
import pagination from "paginationjs/dist/pagination";
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider.js';

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


//paginations
var numbers = [
    {
        "number": "888",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example",
        "price": 9900,
        "rate": 5,
        "reviews": 145
    },
    {   
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example2",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example3",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "888",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example4",
        "price": 9900,
        "rate": 5,
        "reviews": 145
    },
    {   
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example5",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example6",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "888",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example7",
        "price": 9900,
        "rate": 5,
        "reviews": 145
    },
    {   
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example8",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example9",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "888",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example10",
        "price": 9900,
        "rate": 5,
        "reviews": 145
    },
    {   
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example11",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example12",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "888",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example13",
        "price": 9900,
        "rate": 5,
        "reviews": 145
    },
    {   
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example14",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
    {
        "number": "840",
        "photos": [
            "photo-number1.jpg",
            "photo-number2.jpg",
            "photo-number3.jpg",
        ],
        "id": "number__example15",
        "price": 9900,
        "rate": 4,
        "reviews": 65
    },
]

function numbersTemplate(data) {
    let html = "";
    data.forEach(function(number) {
        let points = "";
        let luxury = "";
        let photos, id, numberOfRoom, price, rate, reviews;
        for (let option in number) {
            if (option == "id") {
                id = number[option];
            }
            if (option == "rate") {
                let state = "";
                rate = "<div class='rate'>";
                for(let i = 0; i < 5; i++) {
                    if (i == number[option]) {
                        state =  "rate__star--empty"
                    }
                    if (number[option] == 5) {
                        luxury = `<a href="#" class="pink-link">  люкс</a>`;
                    }
                    rate += `<div class="rate__star ${state}"></div>`;
                }
                rate += "</div>"
            }
            if (option == "number") {
                numberOfRoom = number[option];
            }
            if (option == "photos") {
                // photos = ""
                number[option].forEach(function(item){
                    photos += `<div class='number__photo'><img src='${item}' alt='Фото номера ${numberOfRoom}'></div>`;
                });
                // photos += "</div>";
                
                for (let i = 0; i < number[option].length; i++) {
                    points += "<div class='number__dot'></div>";
                }
            }
            if (option == "price") {
                price = number[option];
            }
            if (option == "reviews") {
                reviews = number[option];
            }
            
        }

        html += `<div class="number" id="${id}">
                    <div class="number__slider">
                        <div class="number__controls">
                            <div class="number__left"></div>
                            <div class="number__right"></div>
                        </div>
                        <div class="number__photos">
                            ${photos}
                        </div>
                        <div class="number__nav">
                            ${points}
                        </div>
                    </div>
                    <div class="number__body">
                        <div class="number__block">
                            <p class="paragraph-q bold">
                                № <span class="big">${numberOfRoom} ${luxury}</span>
                            </p>
                            <p class="paragraph light-50 bold">
                                ${price} <span class="small normal">в сутки</span>
                            </p>
                        </div>
                        <div class="number__block number__block--above-line">
                            ${rate}
                            <p class="paragraph bold">${reviews} <span class="normal">Отзывов</span></p>
                        </div>
                    </div>
            </div>`;
    });
    return html;
}

$('#example-pagination').pagination({
    dataSource: numbers,
    // locator: 'items',
    totalNumber: 15,
    pageSize: 12,
    pageRange: 1,
    showPrevious: false,
    showNext: true,
    nextText: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="white"/></svg>',
    showNavigator: true,
    formatNavigator: '<%= currentPage %> - <%= totalPage %> из <%= totalNumber %> вариантов аренды',
    callback: function(data, pagination) {
        var html = numbersTemplate(data);
        $('#data-container').html(html);
    },
    afterPaging: function() {
        let numbers = document.querySelectorAll(".number");
        let sliders = [];
        numbers.forEach((item)=> {
            //tiny slider
            sliders.push(tns({
                        container: `#${item.id} .number__photos`,
                        items: 1,
                        slideBy: 'page',
                        controlsText: ['', ''],
                        controlsContainer: `#${item.id} .number__controls`,
                        navContainer: `#${item.id} .number__nav`,
                    }))
        })
    },
})

//menu

showMenu();

//showHideFilters

function showHideFilters() {
    let showFiltersButton = document.querySelector(".main__filters-button .button");
    let showResultButton = document.querySelector(".main__filter--result .button");
    function showHide() {
        let filters = document.querySelector(".main__filters");
        filters.classList.toggle("main__filters--disclosed")
    }
    showFiltersButton.addEventListener("click", showHide);
    showResultButton.addEventListener("click", showHide);
}

showHideFilters();

