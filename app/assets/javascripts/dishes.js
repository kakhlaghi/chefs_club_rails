$(document).on('turbolinks:load',function () {
//	$(function() {
	console.log("test")
	//moreIngredients()
	listenForsubmitIngredients()
	getFormPartial()
	listenForFetchChefs()
	sortAlphabetically()
});

//listeners
function listenForFetchChefs(clicked_id){
	$(".js-more").on("click", fetchChefs)
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
//alphabetical live coding
function sortAlphabetically(){
	//takes array of dish names and sorts alphabetically
	//no page refresh
	$("#js-sort-alpha").on("click", function(){
	const url = 'http://localhost:3000/dishes.json'
	let data
		$.get(url).done(function(resp){
			 resp.sort(function(a, b) {
				const nameA = a.name.toUpperCase(); // ignore upper and lowercase
				const nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
			// names must be equal
					return 0;
			})
			resp.forEach((dish, index) => {
			 data += `<li><a href="${dish["chef"]["id"]}/dishes/${dish["id"]}">${dish["name"]}' by '${dish["chef"]["name"]}</a></li><br> `
			});
			document.getElementById("dish-holder").innerHTML = data
		})	
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
		moreIngredients()
		addListenerToForm();
		})
  })
}

function addListenerToForm() {
	const form = document.getElementsByClassName("new_dish") //switch to use ID only one type of thing
	//listen for addmore ingredient fields button after form is rendered to DOM
	form[0].addEventListener('submit', function(event){
	  event.preventDefault();
	  const data = $(this).serialize();
		const url = this.action + '.json';
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
	  this.cookTime = data.cook_time
	  this.ingredients = data.ingredients
		this.dishIngredients = data.dish_ingredients
	}
}
  
  Dish.prototype.createDishDisplay = function() {
		let customHTML = `<h2>${this.name}</h2>`;
		customHTML += `<p><strong>Cook Time:</strong> ${this.cookTime} minutes</p><ul>`;
		for (let i = 0; i < this.dishIngredients.length; i ++) {
	  	customHTML += `<li>${this.dishIngredients[i].quantity} ${this.ingredients[i].name}</li>`
		}
		customHTML += `</ul><a href=${window.location.href}>Continue</p>`;
		return customHTML;
  }


//adds more ingredient fields
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
	})
}
console.log("hello")
