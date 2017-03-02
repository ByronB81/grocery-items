
$(document).ready(function(){
  $("#grocery form").submit(function(event){
    event.preventDefault();
    $("ul").empty();

    var inputs = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var groceryItems = inputs.map(function(input) {
      return $("input#" + input).val().toUpperCase();
    });
    groceryItems.sort().forEach(function(item) {
      $("ul").append('<li>' + item + '</li>');
    });


  });

});

// var inputs = [$("input#item1").val()]
// inputs.sort()
