
//form to dynamically add ingredients without having to change the page
$(function(){
  $('#new_ingredients').on("submit", function(event){
    event.preventDefault();
    let posting = $.post(url, values);
    data = {
        'authenticity token': $("input[name='authenticity_token']").val(),
        'dish':{
        'dishIngredientName': $("#dish_dish_ingredients_attributes_0_ingredients_name").val(),
        'dishIngredientQuantity': $("#dish_dish_ingredients_attributes_0_quantity").val()
      }
    }
    $.ajax({
        type:"PATCH",
        url: this.action,
        data: $(this).serialize,
        success: function(response){
            let $ul = $("div.ingredients ul")
            $ul.append(response);
        }
    }) 
  });
});