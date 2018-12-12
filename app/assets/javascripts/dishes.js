$(function () {
	listenForIngredientIndex()
	//listenForFetchChefs()
	newIngredient()
	moreIngredients()
});

// listeners.....
function listenForIngredientIndex() {
	// when something is clicked
	// fetchDishes()
	$()
}
function listenForFetchChefs(clicked_id){
	$(".js-more").on("click", fetchChefs())
}

// fetchers .....
function fetchDishes() {
	// ajax   '/chefs/:id/dishes
}

function fetchChefs(clicked_id) {
	// ajax   '/chefs
	console.log("hit fetch")
	let id = clicked_id-1
	console.log(id)
	$.get("/chefs.json", function(data){
		let chefs = data;
		let chef = chefs[id];
		let dishes = chef["dishes"]	
		let newChefText = "";
		let dishList = "";
		if(dishes == 0){
			newChefText = "<strong>New Chef!</strong>";
			$("#chef-" + clicked_id).html(newChefText);
		} else{
			dishes.forEach(function(dish){
				dishList += '<ol class="js-dish">' + "Dish Name: " + dish["name"] + " | Cook Time: " + dish["cook_time"] + '</ol>';		
			})
			$("#chef-" + clicked_id).html(dishList);
		}
	})
}


function newIngredient() {
	// $('#new_ingredients').on("submit", function (event) {
	$('.edit_dish').on("submit", function (event) {
		console.log("hit using class")
		console.log(event)
		/*data = {
			'authenticity_token': $("input[name='authenticty_token']").val(),
			'dish': {
				'name': document.getElementsByClassName('dishName')[0].innerHTML,
				'cook_time': parseFloat(document.getElementsByClassName('dishCookTime')[0].innerHTML),
				'dish_ingredients_attributes':	{
				'quantity': $('#dish_dish_ingredients_attributes_0_quantity').val(),
					'ingredients': {
						'name': $('#dish_dish_ingredients_attributes_0_ingredients_name').val()
					}
				}
			}
		}*/
		event.preventDefault();
		$.ajax({
			type: "PATCH",
			url: this.action,
			data: $(this).serialize(), //data
			success: function (response) {
				let $ul = $("div.ingredients ul")
				$ul.append(response);
			}
		})
	});
}

function moreIngredients (){
	$("#button-new-ingr").click(function(event){
		let $button = $(this);
		let url = $(this).data("url")
		const max_fields = 5;
		event.preventDefault();
		let x=0
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
		$("#ingredient-fields-wrap").append(
			`
			<label for="dish_Quantity">Quantity</label>
			
			  <input type="number" name="dish[dish_ingredients_attributes][${x+1}][quantity]" id="dish_dish_ingredients_attributes_${x+1}_quantity">
			  <label for="dish_dish_ingredients_attributes_${x+1}_Ingredient">Ingredient</label>
			  
				<input type="text" name="dish[dish_ingredients_attributes][${x+1}][ingredients][name]" id="dish_dish_ingredients_attributes_${x+1}_ingredients_name">
		  
			<br>
		  `); //add input box
		}

		/*$.get(url, function(response){
			console.log(response)
			$button.before(response)
		})*/
	})
}

