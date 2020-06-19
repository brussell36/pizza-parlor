// Business Logic

function Pizza(size, toppings) {
  this.size = size
  this.toppings = [toppings]
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}

function showPizza(newPizza) {
  $("#pizza-final").append(pizzaSize + "<br>")
  $("#pizza-final").append(pizzaToppings + "<br>");
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
  });
});