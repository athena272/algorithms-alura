function lowerValue(arrayProduct, initialPosition) {
    let cheapest = initialPosition 

    for (let current = initialPosition; current < arrayProduct.length; current++) {
        if (arrayProduct[current].price < arrayProduct[cheapest].price) {
            cheapest = current
        }
    }

    return cheapest
}


module.exports = lowerValue