//favorites
let favoriteStore = {faveDishes: []} 

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()
});


function favoritesManager(){
    const baseURL = 'localhost:3000'
	const url = window.location.href + '.json';
	let postData = {
		dish: document.getElementsByClassName('.dishName')
	}
	//get the data
	fetch(url)
		  .then(response=>response.json())
		  .then(json=> chefFavorite.addToFavorites(json))
		  console.log(chefFavorite)
}

class Favorites{
	constructor(){
		this.array = [];
		favoriteStore.faveDishes.push(this)
	}
}

Favorites.prototype.addToFavorites = function(dish){
	this.array.push(dish)
};

