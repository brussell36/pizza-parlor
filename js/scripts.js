// Business Logic

function Pizza(size, topping1, topping2, topping3) {
  this.size = size
  this.topping1 = topping1,
  this.topping2 = topping2,
  this.topping3 = topping3
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === '12"') {
    $("#pizza-final").append("You owe $15, Thank you for choosing St. Johns Pizza Parlor" + "<br>")
  }
  else if (this.size === '16"') {
    $("#pizza-final").append("You owe $20, Thank you for choosing St. Johns Pizza Parlor" + "<br>")
  }
  else if (this.size === '18"') {
    $("#pizza-final").append("You owe $25, Thank you for choosing St. Johns Pizza Parlor" + "<br>")
  }
  else {
    $("#pizza-final").append("Please choose a size")
  }
}

function showPizza(pizza) {
  for (let values of Object.values(pizza)) {
    $("#pizza-final").append(`${values}<br>`);
  }
}

// UI Logic

$(document).ready(function() {
  $("form#pizza-choose").submit(function(event) {
    event.preventDefault();
    $("#pizza-final").show();
    const size = $("#pizza-size").val();
    const topping1 = $("#pizza-topping1").val();
    const topping2 = $("#pizza-topping2").val();
    const topping3 = $("#pizza-topping3").val();
    const pizza = new Pizza(size, topping1, topping2, topping3);
    console.log(pizza);
    showPizza(pizza);
    pizza.pizzaPrice();
  });
});
