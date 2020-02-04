// function toggleClass(elClick, addClass) {
//     let elementClick = document.querySelectorAll(elClick);    
//     elementClick.forEach( elem => {
//             elem.addEventListener("click", () => {
//                 let elementToggle = elem.parentNode.querySelector(".dropdown__wrap");
//                 elementToggle.classList.toggle(addClass);

//             })
//         }
//     )
// }


function howMany(mode) {
    // let dropdown = document.querySelectorAll(".dropdown");
    let dropdownHeaders = document.querySelectorAll(".dropdown__heading");
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

    dropdownHeaders.forEach(dropHeader => {
        dropHeader.addEventListener("click", () => {
            let curDropdown = dropHeader.parentElement;
            let elementToggle = dropHeader.nextSibling;

            elementToggle.classList.toggle("dropdown__wrap--active");


        

            let addUnit = curDropdown.querySelectorAll('.dropdown__plus');
            let removeUnit = curDropdown.querySelectorAll('.dropdown__minus');
            let numberOfUnits = curDropdown.querySelectorAll('.dropdown__number');
            let totalAmountElement = curDropdown.querySelector('.dropdown__total-amount');
            let clearElement = curDropdown.querySelector('.dropdown__clear');

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

            let totalAmount = curDropdown.classList.contains("dropdown--guests") ? dropdownProperties.guests : dropdownProperties.options;

            let text = "";
            addUnit.forEach(unit => {

                unit.addEventListener("click", () => {
                    let numberOfUnits = unit.previousElementSibling;
                    let minusUnit = numberOfUnits.previousElementSibling;
                    
                    
                    for (let key in totalAmount) {
                        
                        if (unit.parentNode.classList.contains('dropdown__' + key)) {
                            
                            totalAmount[key]++;


                            if (totalAmount[key] > 0) {
                                minusUnit.classList.remove('dropdown__minus--deactive');
                            }
                            numberOfUnits.textContent = totalAmount[key];
                            totalAmount.total++;
                            if (totalAmount.total == 1 && totalAmount === dropdownProperties.guests) {
                                clearElement.classList.add('dropdown__clear--on');
                            }
                            if (totalAmount === dropdownProperties.guests) {
                                totalAmountElement.textContent = totalAmount.total + " " + getGraduation(totalAmount.total, numerals.guests);
                            } else if (totalAmount[key] > 0 && totalAmount === dropdownProperties.options) {
                                text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
                                if (text.length > 21) {
                                    text = text.slice(0, 20) + "...";
                                } 
                                totalAmountElement.textContent = text;
                                
                            }
                            
                        }
                    }
                })
            })

            removeUnit.forEach(unit => {
                unit.addEventListener("click", () => {
                    let numberOfUnits = unit.nextElementSibling;
                    for (let key in totalAmount) {
                        if (unit.parentNode.classList.contains('dropdown__' + key) && totalAmount[key] != 0) {
                            totalAmount[key]--;
                            totalAmount.total--;
                            if (totalAmount.total == 0 && totalAmount === dropdownProperties.guests) {
                                clearElement.classList.remove('dropdown__clear--on');
                            }
                            numberOfUnits.textContent = totalAmount[key];
                            if (totalAmount === dropdownProperties.guests) {
                                totalAmountElement.textContent = totalAmount.total + " " + getGraduation(totalAmount.total, numerals.guests);
                            } else {
                                totalAmountElement.textContent = totalAmount.bedrooms + " " + getGraduation(totalAmount.bedrooms, numerals.options.bedrooms) + ", " + totalAmount.beds + " " + getGraduation(totalAmount.beds, numerals.options.beds) + ", " + totalAmount.bathrooms + " " + getGraduation(totalAmount.bathrooms, numerals.options.bathrooms) ;
                                
                            }
                            
                            if (totalAmount.total == 0 && totalAmount === dropdownProperties.guests) {
                                totalAmountElement.textContent = "Сколько гостей";
                            } else if (totalAmount[key] == 0 && totalAmount === dropdownProperties.guests) {
                                unit.classList.add('dropdown__minus--deactive');
                            } else if (totalAmount === dropdownProperties.options) {
                                text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
                                if (text.length > 21) {
                                    text = text.slice(0, 20) + "...";
                                } 
                                
                                totalAmountElement.textContent = text;
                            }

                        }
                    }
                })
            })

            if (totalAmount === dropdownProperties.guests) {
                clearElement.addEventListener("click", () => {
                    for (let key in totalAmount) {
                        totalAmount[key] = 0;
                    }
                    numberOfUnits.forEach(unit => {
                        unit.textContent = 0;
                        unit.previousElementSibling.classList.add('dropdown__minus--deactive')
                    })
                    clearElement.classList.remove('dropdown__clear--on');
                    totalAmountElement.textContent = "Количество гостей";
                })
            }
            
        })

    })
}

export {howMany};
