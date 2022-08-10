// 1st 100 unit 5tk per unit. more than 100 unit 6tk per unit within 200 unit. more than 200 unit 7 tk per unit.
// calculate electricity bill

function electricityBill(unit) {
    if (unit <= 100) {
        const first100UnitPrice = unit * 5;
        return first100UnitPrice;
    }
    else if (unit > 100 && unit <= 200) {
        const init100UnitPrice = 100 * 5;
        const secondRemainUnit = unit - 100;
        const second100UnitPrice = init100UnitPrice + (secondRemainUnit * 6);
        return second100UnitPrice;
    }
    else{
        const first200UnitPrice = (100 * 5) + (100 * 6);
        const lastRemainUnit = unit - 200;
        const lastRemainUnitPrice = first200UnitPrice + lastRemainUnit * 7;
        return lastRemainUnitPrice;
    }
}

const unit = 200;
console.log(electricityBill(unit));