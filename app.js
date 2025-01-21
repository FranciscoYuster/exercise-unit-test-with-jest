//función que suma 2 numeros
const sum =(a,b) => {
    return a + b
}

//console.log 
console.log(sum(7,3))


function fromEuroToDollar (valueInEuro) {
    let valorDolar = valueInEuro*1.07
    return valorDolar
}

function fromDollarToYen  (valueInDolar) {
    let valorYen = valueInDolar*156.5
    return valorYen
}

function fromYenToPound (valueInYen) {
    let valorPound = valueInYen*0.87
    return valorPound
}


module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};