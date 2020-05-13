var numbers = [
    {
        "number": " 888",
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
    // {   
    //     "number": " 840",
    //     "photos": [
    //         "photo-number1.jpg",
    //         "photo-number2.jpg",
    //         "photo-number3.jpg",
    //     ],
    //     "id": "number__example2",
    //     "price": 9900,
    //     "rate": 4,
    //     "reviews": 65
    // },
    // {
    //     "number": " 840",
    //     "photos": [
    //         "photo-number1.jpg",
    //         "photo-number2.jpg",
    //         "photo-number3.jpg",
    //     ],
    //     "id": "number__example3",
    //     "price": 9900,
    //     "rate": 4,
    //     "reviews": 65
    // }
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
                photos = "<div class='number__photos'>"
                number[option].forEach(function(item){
                    photos += `<div class='number__photo'><img src='${item}' alt='Фото номера ${numberOfRoom}'></div>`;
                });
                photos += "</div>";
                
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
    console.log(html)
    return html;
}
numbersTemplate(numbers);
