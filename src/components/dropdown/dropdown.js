function toggleClass(elClick, elToggle, addClass) {
    let elementClick = document.querySelector(elClick);
    let elementToggle = document.querySelector(elToggle);
    elementClick.addEventListener("click", function () {
        elementToggle.classList.toggle(addClass);
    });
}

function howManyGuests() {
    let addGuests = document.querySelectorAll('.dropdown__plus');
    let removeGuests = document.querySelectorAll('.dropdown__minus');
    let numberOfGuests = document.querySelectorAll('.dropdown__number');
    let totalAmountElement = document.querySelector('.dropdown__total-amount');
    let clearElement = document.querySelector('.dropdown__clear');
    let totalAmount = {
        "adults": 0,
        "children": 0,
        "babies": 0,
        "total": 0
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
                    totalAmountElement.textContent = "Количество гостей " + totalAmount.total;
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
                    if (totalAmount[key] == 0) {
                        guest.classList.add('dropdown__minus--deactive');
                    }
                    numberOfGuests.textContent = totalAmount[key];
                    totalAmountElement.textContent = "Количество гостей " + totalAmount.total;
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