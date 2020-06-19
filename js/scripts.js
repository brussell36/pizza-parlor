// Business Logic

function Pizza(size, toppings) {
  this.size = [size]
  this.toppings = [toppings]
}

Pizza.prototype.addPizza = function(size, toppings) {
  this.size.push(size);
  this.toppings.push(toppings);
}

// UI Logic

$(document).ready(function() {
  const newPizza = new Pizza();
  $("form#pizza-choose").submit(function(event) {
    event.preventDefault();
    $("#pizza-final").show();
    const pizzaSize = $("#pizza-size").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      const pizzaToppings = $(this).val();
    });
    newPizza.addPizza(pizzaSize, pizzaToppings);
    console.log(newPizza);
  });
});