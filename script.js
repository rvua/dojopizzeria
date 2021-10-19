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

// Bonus Challenge: Create a function called randomPizza 
// that uses Math.random() to create a random pizza!
var crust = ['hand tossed', 'deep dish', 'thin', 'gluten free'];
var sauce = ['marinara', 'traditional', 'bbq'];
var cheese = ['mozzarella', 'parmasean', 'feta', 'cheddar'];
var topping = ['olive', 'sausage', 'pepperoni'];

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i]
}

function randomPizza() {
    var pizza = {};
    pizza.crust = randomPick(crust);
    pizza.sauce = randomPick(sauce);
    pizza.cheese = [];
    pizza.topping = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheese.push(randomPick(cheese));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.topping.push(randomPick(topping));
    }
    return pizza;
}
console.log(randomPizza()); 