// Importamos la funcion desde app.js
const {sum} = require("./app.js")
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen  } = require('./app.js');
const { fromYenToPound } = require('./app.js');


test("14 + 9 es igual 23",()=> {
    let total =sum(14,9)
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const euro = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("", function() {
    const dollars = fromDollarToYen (35);

    const expected = 35 * 156.5; 
    
     expect(fromDollarToYen (35)).toBe(5477.5);
})

test("", function() {
    const Yens = fromYenToPound(3745);

    const expected = 3745 * 0.87; 
    
     expect(fromYenToPound(3745)).toBe(3258.15); 
})