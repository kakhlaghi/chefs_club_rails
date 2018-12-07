$(function () {
	listenForIngredientIndex()
	//listenForChefsIndex()
	newIngredient()
});

// listeners.....
function listenForIngredientIndex() {
	// when something is clicked
	// fetchDishes()
	$()
}

// fetchers .....
function fetchDishes() {
	// ajax   '/chefs/:id/dishes
}

function fetchChefs() {
	// ajax   '/chefs
}

function fetchChefDetails() {
	// ajax   '/chefs/:id
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
	$("button").click(function(event){
		let $button = $(this);
		let url = $(this).data("url")
		$.get(url, function(response){
			console.log(response)
			$button.before(response)
		})

		event.preventDefault();
	})
}