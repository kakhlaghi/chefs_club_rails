$(function () {
	listenForIngredientIndex()
	listenForFetchChefs()
	newIngredient()
});

// listeners.....
function listenForIngredientIndex() {
	// when something is clicked
	// fetchDishes()
	$()
}
function listenForFetchChefs(){
	$(".js-more").click(fetchChefs())	
}

// fetchers .....
function fetchDishes() {
	// ajax   '/chefs/:id/dishes
}

function fetchChefs() {
	// ajax   '/chefs
	console.log("hit fetch")
	$.get("/chefs.json", function(data){
		let chefs = ;
	chefs.forEach(function(chef,index){
		let dishList = "";
		let id = index+1;
		let newChefText = "";
		let dishes = chef["dishes"]	
		if(dishes === 0){
			newChefText = "<strong>New Chef!</strong>";
			$("#chef-" + id).html(newChefText);
		} else{
			dishes.forEach(function(dish){
				dishList += '<li class="js-dish">' + "Dish Name: " + dish["name"] + " Cook Time: " + dish["cook_time"] + '</li>';		
			})
			$("#chef-" + id).append(dishList);
			}
		})
	})
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

class menu{
	constructor(dish, price){
		this.dish = dish;
		this.price = price;
	}
}