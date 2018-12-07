
//form to dynamically add ingredients without having to change the page
$(function(){
  //function listenForNewIngredient()

  
});

//listeners
function listenForNewIngredient(){
    newIngredient()
}



/*function getAllDishes(){
    const allDishes = 
  }*/

function newIngredient(){
  $('input#new_ingredient').on('click', function(e){
    e.preventDefault();
    let qty = document.getElementById('#dish_dish_ingredients_attributes_0_quantity')
    let name = document.getElementById('#dish_dish_ingredients_attributes_0_ingredients_name')
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
}

class Menu {
    constructor(dishes, time){
        this.dishes=dishes;
        this.cook_time=cook_time;
    }
}

/*Menu.prototype.sumCookTime = function(){
    Menu
}

*/

