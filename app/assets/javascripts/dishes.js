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
		data = {
			quantity: $('#dish_dish_ingredients_attributes_0_quantity').val(),
			name: $('#dish_dish_ingredients_attributes_0_ingredients_name').val()
		}
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