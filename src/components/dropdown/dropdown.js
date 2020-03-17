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
        let dropdownCurrentMode = e.currentTarget.dataset;
        let dropdownToggle = e.target.dataset.heading || e.target.dataset.amount;
        let dropdownPlus = e.target.dataset.plus;
        let dropdownMinus = e.target.dataset.minus;
        let dropdownHead = e.currentTarget.querySelector('.dropdown__total-amount');
        let curProperty = e.target.parentElement.dataset;
        let clearButton = e.currentTarget.querySelector('.dropdown__clear');
        let dropdownNumbers = e.currentTarget.querySelectorAll('.dropdown__number');
        let dropdownWrap = e.currentTarget.querySelector(".dropdown__wrap");
        let clearButtonEvent = e.target.dataset.clear;
        let applyButtonEvent = e.target.dataset.apply;
        let totalAmount = e.currentTarget.dataset.guests ? dropdownProperties.guests : dropdownProperties.options;
        //click on header
        if (dropdownToggle) {           
            dropdownWrap.classList.toggle("dropdown__wrap--active");
        }


        //click on plus
        if (dropdownPlus) {           
            e.target.previousElementSibling.textContent++; 
            let curPropertyMinus = e.target.previousElementSibling.previousElementSibling;
            
                
            for (let key in totalAmount) {
                if (curProperty.hasOwnProperty(key)) {
                    totalAmount[key]++;
                    totalAmount.total++;
                    if (dropdownCurrentMode.options) {
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
        if (dropdownMinus) {
            if (e.target.nextElementSibling.textContent == 1) {
                e.target.classList.toggle('dropdown__minus--deactive');                
            }
            
            if (e.target.nextElementSibling.textContent != 0) {
                e.target.nextElementSibling.textContent--;
                for (let key in totalAmount) {
                    if (curProperty.hasOwnProperty(key)) {
                        totalAmount[key]--;
                        totalAmount.total--;
                        if (dropdownCurrentMode.options) {
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
        if (clearButtonEvent) {
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
        if (applyButtonEvent) {
            dropdownWrap.classList.toggle("dropdown__wrap--active");
        }
    }

    dropdown.addEventListener("click", quantity)
    



    // dropdownHeaders.forEach(dropHeader => {
    //     dropHeader.addEventListener("click", (e) => {
    //         // console.log(e.currentTarget)
    //         let curDropdown = dropHeader.parentElement;
    //         let elementToggle = dropHeader.nextElementSibling;
    //         elementToggle.classList.toggle("dropdown__wrap--active");
        
    //         let addUnit = curDropdown.querySelectorAll('.dropdown__plus');
    //         let removeUnit = curDropdown.querySelectorAll('.dropdown__minus');
    //         let numberOfUnits = curDropdown.querySelectorAll('.dropdown__number');
    //         let totalAmountElement = curDropdown.querySelector('.dropdown__total-amount');
    //         let clearElement = curDropdown.querySelector('.dropdown__clear');
    //         let applyElement = curDropdown.querySelector('.dropdown__apply');
    //         let dropdownProperties =  {
    //             "guests": {
    //                 "adults": 0,
    //                 "children": 0,
    //                 "babies": 0,
    //                 "total": 0
    //             },
    //             "options": {
    //                 "bedrooms": 0,
    //                 "beds": 0,
    //                 "bathrooms": 0,
    //                 "total": 0
    //             }              
    //         }

    //         let totalAmount = curDropdown.classList.contains("dropdown--guests") ? dropdownProperties.guests : dropdownProperties.options;

    //         let text = "";

    //         //clear values
    //         numberOfUnits.forEach(unit => {
    //             unit.textContent = 0;
    //             unit.previousElementSibling.classList.add('dropdown__minus--deactive')
    //         })
    //         totalAmountElement.textContent = "Количество гостей";

    //         addUnit.forEach(unit => {

    //             unit.addEventListener("click", () => {
    //                 let numberOfUnits = unit.previousElementSibling;
    //                 let minusUnit = numberOfUnits.previousElementSibling;
                    
                    
    //                 for (let key in totalAmount) {
                        
    //                     if (unit.parentNode.classList.contains('dropdown__' + key)) {
                            
    //                         totalAmount[key]++;


    //                         if (totalAmount[key] > 0) {
    //                             minusUnit.classList.remove('dropdown__minus--deactive');
    //                         }
    //                         numberOfUnits.textContent = totalAmount[key];
    //                         totalAmount.total++;
    //                         if (totalAmount.total == 1 && totalAmount === dropdownProperties.guests) {
    //                             clearElement.classList.add('dropdown__clear--on');
    //                         }
    //                         if (totalAmount === dropdownProperties.guests) {
    //                             totalAmountElement.textContent = totalAmount.total + " " + getGraduation(totalAmount.total, numerals.guests);
    //                         } else if (totalAmount[key] > 0 && totalAmount === dropdownProperties.options) {
    //                             text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
    //                             if (text.length > 21) {
    //                                 text = text.slice(0, 20) + "...";
    //                             } 
    //                             totalAmountElement.textContent = text;
                                
    //                         }
                            
    //                     }
    //                 }
    //             })
    //         })

    //         removeUnit.forEach(unit => {
    //             unit.addEventListener("click", () => {
    //                 let numberOfUnits = unit.nextElementSibling;
    //                 for (let key in totalAmount) {
    //                     if (unit.parentNode.classList.contains('dropdown__' + key) && totalAmount[key] != 0) {
    //                         totalAmount[key]--;
    //                         totalAmount.total--;
    //                         if (totalAmount.total == 0 && totalAmount === dropdownProperties.guests) {
    //                             clearElement.classList.remove('dropdown__clear--on');
    //                         }
    //                         numberOfUnits.textContent = totalAmount[key];
    //                         if (totalAmount === dropdownProperties.guests) {
    //                             totalAmountElement.textContent = totalAmount.total + " " + getGraduation(totalAmount.total, numerals.guests);
    //                         } else {
    //                             totalAmountElement.textContent = totalAmount.bedrooms + " " + getGraduation(totalAmount.bedrooms, numerals.options.bedrooms) + ", " + totalAmount.beds + " " + getGraduation(totalAmount.beds, numerals.options.beds) + ", " + totalAmount.bathrooms + " " + getGraduation(totalAmount.bathrooms, numerals.options.bathrooms) ;
                                
    //                         }
                            
    //                         if (totalAmount.total == 0 && totalAmount === dropdownProperties.guests) {
    //                             totalAmountElement.textContent = "Сколько гостей";
    //                         } else if (totalAmount[key] == 0 && totalAmount === dropdownProperties.guests) {
    //                             unit.classList.add('dropdown__minus--deactive');
    //                         } else if (totalAmount === dropdownProperties.options) {
    //                             text = `${totalAmount.bedrooms} ${getGraduation(totalAmount.bedrooms, numerals.options.bedrooms)}, ${totalAmount.beds} ${getGraduation(totalAmount.beds, numerals.options.beds)}, ${totalAmount.bathrooms} ${getGraduation(totalAmount.bathrooms, numerals.options.bathrooms)}`;
    //                             if (text.length > 21) {
    //                                 text = text.slice(0, 20) + "...";
    //                             } 
                                
    //                             totalAmountElement.textContent = text;
    //                         }

    //                     }
    //                 }
    //             })
    //         })

    //         if (totalAmount === dropdownProperties.guests) {
    //             clearElement.addEventListener("click", () => {
    //                 for (let key in totalAmount) {
    //                     totalAmount[key] = 0;
    //                 }
    //                 numberOfUnits.forEach(unit => {
    //                     unit.textContent = 0;
    //                     unit.previousElementSibling.classList.add('dropdown__minus--deactive')
    //                 })
    //                 clearElement.classList.remove('dropdown__clear--on');
    //                 totalAmountElement.textContent = "Количество гостей";
    //             })

    //             applyElement.addEventListener("click", (e) => {
    //                 console.log(e.target)
    //                 // elementToggle.classList.toggle("dropdown__wrap--active");
    //                 // totalAmountElement.textContent = text;
                    
    //             })
    //         }
            
    //     })

    // })
}

export {howMany};
