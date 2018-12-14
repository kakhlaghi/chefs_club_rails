//favorites

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()

});

// function favoritesManager(){
	let favoriteStore;
	//let faveManagerObj = new Object
//can create an object? and store favoritesFetcher and favoritesRender functions
	function favoritesFetcher(){
			//can't declare and assign here because of hoisting, i think. tried using scope function.
	favoriteStore = {faveDishes: []} 
	let chefFavorite = new Favorites()
	const url = window.location.href + '.json';
	let postData = {
		dish: document.getElementsByClassName('.dishName')
	}
	//get the data
	fetch(url)
		  .then(response=>response.json())//arrow functions,
		  .then(json=> chefFavorite.addToFavorites(json))
		  console.log(chefFavorite)
		  alert('Added!')
	}
	function renderFavorites(){
		let target = document.querySelector('#favoritesHead')
		let div = document.createElement('p');
		let favoritesArray = favoriteStore["faveDishes"][0]["array"];
		
		for(i=0;i<favoritesArray.length;i++){
			div.append(favoritesArray[i]["name"] +' takes: ' + favoritesArray[i]["cook_time"] + ' minutes');
		}
		target.parentNode.insertBefore(div, target);
		//$("<span>Hello world!</span>").insertAfter("h2");
		return favoriteStore;
	}
	//faveManagerObj.favoritesFetcher = favoritesFetcher
	//faveManagerObj.renderFavorites = renderFavorites
//}

	class Favorites{
		constructor(){
			this.array = [];
			favoriteStore.faveDishes.push(this)
		}
	}

	class Chef{
		constructor(data){
			this.name = data.name
			this.email = data.email
			this.password = data.password
			this.id = data.id
			this.dishes = []
		}
	}

	Chef.prototype.renderDishList = function(dish){
		//some html maybe
	}

	Favorites.prototype.addToFavorites = function(dish){
		this.array.push(dish)
		//return this.array
	};


