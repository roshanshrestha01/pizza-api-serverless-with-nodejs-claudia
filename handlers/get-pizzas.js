const pizzas = require('../data/pizzas.json');

function getPizzas(pizzaID) {
  if (!pizzaID)    
    return pizzas;
  

  const pizza = pizzas.find((pizza) => {
    return pizza.id == pizzaID;
  })

  if (pizza)
    return pizza;

  throw new Error("The pizza you requested was not found.");

}

module.exports = getPizzas;