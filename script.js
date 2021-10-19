// Create a function called pizzaOven. We should 
// feel free to customize what information we keep 
// track of for our pizza, but let's make sure that 
// we include the following: crustType, sauceType, 
// cheeses, and toppings.

// Create a function called pizzaOven that returns 
// a JavaScript (Pizza) Object
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza; 
}
var pizza1 = pizzaOven('deep dish', 
'traditional', ['mozzarella'], ['pepperoni', 'sausage']);

var pizza2 = pizzaOven('hand tossed', 
'marinara', ['mozzarella', 'feta'], ['mushrooms', 
'olives', 'onions']);

var pizza3 = pizzaOven('hand tossed', 
'traditional', ['mozzarella'], ['pepperoni']);

var pizza4 = pizzaOven('hand tossed', 
'marinara', ['feta'], ['sausage']);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

function randomPizza(crustType, sauceType, cheeses, toppings){
    var crust = ['hand tossed', 'deep dish'];
    var sauce = ['marinara', 'traditional'];
    var cheese = ['mozzarella', 'parmasean'];
    var topping = ['olive', 'sausage', 'pepperoni']
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.topping = toppings;
    return Math.random(pizza); 
}
console.log(pizza);