// suppose 1st 2kg of potata is 30 tk per kg, more than 2kg is 25 tk per kg. now calculate price based on quantity
 
function calculatePrice(quantity) {
    if (quantity <= 2 ) {
        const initPrice = 30 * quantity;
        return initPrice;
    }
    else if (quantity > 2) {
        const initPrice = 30 * 2;
        const extraQuantity = quantity - 2;
        const secondPrice = 25 * extraQuantity;
        const secondFinalPrice = initPrice + secondPrice;
        return secondFinalPrice;
    }
}

const quantity = 2.5;
console.log(calculatePrice(quantity));