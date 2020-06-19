// Business Logic

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

// UI Logic

$(document).ready(function() {
  $("form#pizza-choose").submit(function(event) {
    event.preventDefault();
    $("#pizza-final").show();
    const pizzaSize = $("#pizza-size").val();
    $("#pizza-final").append(pizzaSize + "<br>")
    $("input:checkbox[name=toppings]:checked").each(function() {
      const pizzaToppings = $(this).val();
      $("#pizza-final").append(pizzaToppings + "<br>");
    })
  });
});