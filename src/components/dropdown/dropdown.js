function toggleClass(elClick, elToggle, addClass) {
    let elementClick = document.querySelector(elClick);
    let elementToggle = document.querySelector(elToggle);
    elementClick.addEventListener("click", function () {
        elementToggle.classList.toggle(addClass);
    });
}

function howManyGuests(mainClass) {
    let addGuests = document.querySelectorAll(mainClass + ' .dropdown__plus');
    let removeGuests = document.querySelectorAll(mainClass + ' .dropdown__minus');
    let numberOfGuests = document.querySelectorAll(mainClass + ' .dropdown__number');
    let totalAmountElement = document.querySelector(mainClass + ' .dropdown__total-amount');
    let clearElement = document.querySelector(mainClass + ' .dropdown__clear');
    let totalAmount = {
        "adults": 0,
        "children": 0,
        "babies": 0,
        "total": 0
    }
    

    function getGraduation(guests) {
        guests = String(guests);
        let graduation = "";
        let lastNumber = parseInt(guests[guests.length - 1]);
        if (parseInt(guests) > 4 && parseInt(guests) < 21) {
            graduation = "ей";
        } else if (lastNumber > 1 && lastNumber < 5) {
            graduation = "я";
        } else if (lastNumber == 1) {
            graduation = "ь";
        } else {
            graduation = "ей";
        }
        return graduation;
    }
    
    Array.from(addGuests).forEach(guest => {
        guest.addEventListener("click", (el) => {
            let numberOfGuests = guest.previousElementSibling;
            let minusGuest = numberOfGuests.previousElementSibling;                 
            for (let key in totalAmount) {
                if (guest.parentNode.classList.contains('dropdown__' + key)) {
                    
                    totalAmount[key]++;
                    
                    
                    if (totalAmount[key] > 0) {
                        minusGuest.classList.remove('dropdown__minus--deactive');
                    }
                    numberOfGuests.textContent = totalAmount[key];
                    totalAmount.total++;
                    if (totalAmount.total == 1) {
                        clearElement.classList.add('dropdown__clear--on');
                    }
                    totalAmountElement.textContent = totalAmount.total + " гост" + getGraduation(totalAmount.total);
                }
            }
        })
    })
    
    Array.from(removeGuests).forEach(guest => {
        guest.addEventListener("click", () => {
            let numberOfGuests = guest.nextElementSibling;
            for (let key in totalAmount) {
                if (guest.parentNode.classList.contains('dropdown__' + key) && totalAmount[key] != 0) {                   
                    totalAmount[key]--;
                    totalAmount.total--;
                    if (totalAmount.total == 0) {
                        clearElement.classList.remove('dropdown__clear--on');
                    }
                    numberOfGuests.textContent = totalAmount[key];
                    totalAmountElement.textContent = totalAmount.total + " гост" + getGraduation(totalAmount.total);
                    if (totalAmount[key] == 0) {
                        guest.classList.add('dropdown__minus--deactive');
                        totalAmountElement.textContent = 'Сколько гостей';
                    }
                    
                }
            }
        })
    })

    clearElement.addEventListener("click", () => {
        for (let key in totalAmount) {
            totalAmount[key] = 0;
        }
        Array.from(numberOfGuests).forEach(guest => {
            guest.textContent = 0;
            guest.previousElementSibling.classList.add('dropdown__minus--deactive')
        })
        totalAmountElement.textContent = "Количество гостей";
    })
}
export {toggleClass, howManyGuests};
// toggleClass(".dropdown__heading", ".dropdown__wrap", "dropdown__wrap--active");