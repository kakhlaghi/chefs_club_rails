//$(document).on ('turbolinks:load',function () {
	$(function() {
	moreIngredients()
	/*$(document).on "turbolinks:load", ->
  alert "page has loaded!"*/
	listenForsubmitIngredients()
	getFormPartial()
});

//listeners
function listenForFetchChefs(clicked_id){
	$(".js-more").on("click", fetchChefs())
	console.log("hello")
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

function listenForsubmitIngredients(){
	$('.edit_dish').on("submit", function(event){
		return submitIngredients(event)
	}) 
}



//this is where i'm working
function getFormPartial() {
	const newRecipeLink = document.getElementById("new-dish-link");
  	newRecipeLink.addEventListener('click', function(event){
	event.preventDefault();

	const address = this.attributes.href.textContent;
  $.get(address).done(function(resp){
	$("body").html(resp);
	addListenerToForm();
	})
  })
}

function addListenerToForm() {
	const form = document.getElementsByClassName("new_dish")
	form[0].addEventListener('submit', function(event){
	  event.preventDefault();
	  const data = $(this).serialize();
		const url = this.action + '.json';
		debugger
	  postDataFrom(url, data);
	})
  }
function postDataFrom(url, data) {
	$.ajax({
	  type: "POST",
	  url: url,
		data: data,
	  success: function(response) {
		const mydish = new Dish(response);
		debugger
		document.getElementById("new_dish").innerHTML = mydish.createDishDisplay();
	  },
	  error: function(res) {
		console.log("fail:" + res)
	  }
	})
  }

class Dish {
	constructor(data) {
	  this.name = data.name
	  this.cook_time = data.cook_time
	  this.ingredients = data.ingredients
		this.dish_ingredients = data.dish_ingredients
	}
  }
  
  Dish.prototype.createDishDisplay = function() {
	let customHTML = `<h2>${this.name}</h2>`;
	customHTML += `<p><strong>Cook Time:</strong> ${this.cook_time} minutes</p><ul>`;
	for (let i = 0; i < this.dish_ingredients.length; i ++) {
	  customHTML += `<li>${this.dish_ingredients[i].quantity} ${this.ingredients[i].name}</li>`
	}
	customHTML += `</ul><p>${this.instructions}</p>`;
	return customHTML;
  }






/*function newIngredient() {
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
		}
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
}*/

function moreIngredients (){
	let x=1
	let id=0
	$("#button-new-ingr").click(function(event){
		let $button = $(this);
		let url = $(this).data("url")
		let max_fields = 5;
		event.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			id++;
		$("#ingredient-fields-wrap").append(
			`<label for="dish_Quantity">Quantity</label>
			  <input type="number" name="dish[dish_ingredients_attributes][${id}][quantity]" id="dish_dish_ingredients_attributes_${id}_quantity">
			  <label for="dish_dish_ingredients_attributes_${id}_Ingredient">Ingredient</label>
				<input type="text" name="dish[dish_ingredients_attributes][${id}][ingredients][name]" id="dish_dish_ingredients_attributes_${id}_ingredients_name">
			<br>`);  //add input box
		}
		/*$.get(url, function(response){
			console.log(response)
			$button.before(response)
		})*/
	})
}



/*let data = {
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
	}	
*/