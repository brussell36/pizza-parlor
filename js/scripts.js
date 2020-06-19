// Business Logic

function Pizza(size, topping1, topping2, topping3) {
  this.size = size
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
}

Pizza.prototype.pizzaPrice = function() {
  if (pizza.size === '12"') {
    $("#pizza-final").append("You owe $15")
  }
  else if (pizza.size === '16"') {
    $("#pizza-final").append("You owe $20")
  }
  else {
    $("#pizza-final").append("You owe $25")
  }
}

function showPizza(pizzaParam) {
  $("#pizza-final").append(pizza.size + "<br>" + pizza.topping1 + "<br>" + pizza.topping2 + "<br>" + pizza.topping3 + "<br>")
}

// UI Logic

$(document).ready(function() {

  $("form#pizza-choose").submit(function(event) {
    event.preventDefault();
    $("#pizza-final").show();
    const pizzaSize = $("#pizza-size").val();
    const topping1 = $("#pizza-topping1").val();
    const topping2 = $("#pizza-topping2").val();
    const topping3 = $("#pizza-topping3").val();
    const newPizza = new Pizza(pizzaSize, topping1, topping2, topping3);
    showPizza(newPizza);
  });
});
