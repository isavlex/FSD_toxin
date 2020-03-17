class Guests {
    constructor () {
        this.guests = {
            "adults": 0,
            "children": 0,
            "babies": 0,
            "total": 0
        }
    }
}

let testGusts = new Guests();
let testGusts2 = new Guests();
testGusts.guests.adults = 1;
console.log(testGusts.guests)

console.log(testGusts2)