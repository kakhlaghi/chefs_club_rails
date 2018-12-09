//favorites

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()
	if(Favorites == 'undefined'){
		const chefFav = new Favorites();
	}
});

function favoritesManager(){
    const baseURL = 'localhost:3000'
	const url = window.location.href + '.json';

	let postData = {
		dish: document.getElementsByClassName('.dishName')
	}
	debugger
	//get the data
	fetch(url,{
		method: 'POST',
		body: JSON.stringify(postData)
	})
		  .then(response=>response.json())
		  .then(json=>Favorites.addToFavorites(json))
		  .then(console.log(Favorites))

}

class Favorites{
	constructor(dish){
		this.array = [dish];
	}
}

Favorites.prototype.addToFavorites = function(dish){
	this.array.push(dish)
};

