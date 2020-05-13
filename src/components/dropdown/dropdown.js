
function howMany(idElement) {
    // let dropdown = document.querySelectorAll(".dropdown");
    let dropdownHeaders = document.querySelectorAll(".dropdown__heading");
    // let dropdowns = document.querySelectorAll(".dropdown--guests");
    let dropdown = document.getElementById(idElement);
    let numerals = {
        "guests": ["гость", "гостя", "гостей"],
        "options": {
            "bedrooms": ["спальня", "спальни", "спален"],
            "beds": ["кровать", "кровати", "кроватей"],
            "bathrooms": ["ванная комната", "ванных комнаты", "ванных комнат"],
        },
    }

    

    function getGraduation(quantity, numeral) {
        quantity = String(quantity);
        let graduation = "";
        let lastNumber = parseInt(quantity[quantity.length - 1]);
        if (parseInt(quantity) > 4 && parseInt(quantity) < 21) {
            graduation = numeral[2];
        } else if (lastNumber > 1 && lastNumber < 5) {
            graduation = numeral[1];
        } else if (lastNumber == 1) {
            graduation = numeral[0];
        } else {
            graduation = numeral[2];
        }
        return graduation;
    }

    let dropdownProperties =  {
        "guests": {
            "adults": 0,
            "children": 0,
            "babies": 0,
            "total": 0
        },
        "options": {
            "bedrooms": 0,
            "beds": 0,
            "bathrooms": 0,
            "total": 0
        }              
    }


    function quantity(e) {
        let text = "";
        let action = e.target.dataset.action;
        let dropdownCurrentMode = e.currentTarget.dataset.action;
        let dropdownHead = e.currentTarget.querySelector('.dropdown__total-amount');
        let curProperty = e.target.parentElement.dataset.action;
        let clearButton = e.currentTarget.querySelector('.dropdown__clear');
        let dropdownNumbers = e.currentTarget.querySelectorAll('.dropdown__number');
        let dropdownWrap = e.currentTarget.querySelector(".dropdown__wrap");
        let totalAmount = e.currentTarget.dataset.action == "guests" ? dropdownProperties.guests : dropdownProperties.options;

        dropdown.classList.toggle("dropdown--active");

        //click on header
        if (action == "heading" || action == "amount") {           
            dropdownWrap.classList.toggle("dropdown__wrap--active");
        }


        //click on plus
        if (action == "plus") {           
            e.target.previousElementSibling.textContent++; 
            let curPropertyMinus = e.target.previousElementSibling.previousElementSibling;
                
            for (let key in totalAmount) {
                if (curProperty == key) {
                    totalAmount[key]++;
                    totalAmount.total++;
                    if (dropdownCurrentMode == "options") {
                        text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
                        if (text.length > 21) {
                            text = text.slice(0, 20) + "...";
                        } 
                        dropdownHead.textContent = text;
                    } else {
                        dropdownHead.textContent = `${totalAmount.total} ${getGraduation(totalAmount.total, numerals.guests)}`;
                        clearButton.classList.remove('dropdown__clear--off');
                    }
                    curPropertyMinus.classList.remove('dropdown__minus--deactive');
                    
                }
            }
        }
        //click on minus
        if (action == "minus") {
            if (e.target.nextElementSibling.textContent == 1) {
                e.target.classList.toggle('dropdown__minus--deactive');                
            }
            
            if (e.target.nextElementSibling.textContent != 0) {
                e.target.nextElementSibling.textContent--;
                for (let key in totalAmount) {
                    if (curProperty == key) {
                        totalAmount[key]--;
                        totalAmount.total--;
                        if (dropdownCurrentMode == "options") {
                            text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
                            if (text.length > 21) {
                                text = text.slice(0, 20) + "...";
                            } 
                            dropdownHead.textContent = text;
                        } else {
                            dropdownHead.textContent = `${totalAmount.total} ${getGraduation(totalAmount.total, numerals.guests)}`;
                        }
                        
                    }
                }
            }

            if (totalAmount.total === 0 && dropdownCurrentMode.guests) {
                clearButton.classList.add('dropdown__clear--off');
                dropdownHead.textContent = "Количество гостей";
            }
             
        }
        //click on clear
        if (action == "clear") {
            for (let key in totalAmount) {
                totalAmount[key] = 0;
            }
            dropdownNumbers.forEach(dropdownNumber => {
                dropdownNumber.textContent = 0;
            })
            dropdownHead.textContent = "Количество гостей";
            clearButton.classList.add('dropdown__clear--off');
        }

        //click on apply
        if (action == "apply") {
            dropdownWrap.classList.toggle("dropdown__wrap--active");
        }
    }

    dropdown.addEventListener("click", quantity)
    
}

export {howMany};
