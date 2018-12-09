//favorites

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
		  .then(json=>Favorites(json).call(chefFavorite))
		  console.log(chefFavorite)
}

class Favorites{
	constructor(dish){
		this.array = [dish];
	}
}

Favorites.prototype.addToFavorites = function(dish){
	this.array.push(dish)
};

