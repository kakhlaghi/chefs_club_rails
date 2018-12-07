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
	$('input#new_ingredient').on("click", function (event) {
		console.log("hit")
		console.log(event)
		let qty = $('#dish_dish_ingredients_attributes_0_quantity').val()
		let name = $('#dish_dish_ingredients_attributes_0_ingredients_name').val()

		event.preventDefault();
		$.ajax({
			type: "PATCH",
			url: this.action,
			data: $(this).serialize,
			success: function (response) {
				let $ul = $("div.ingredients ul")
				$ul.append(response);
			}
		})
	});
}