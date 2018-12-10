//favorites

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()

});


let favoriteStore = {faveDishes: []} 

function favoritesFetcher(){
	let chefFavorite = new Favorites()
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

	function renderFavorites(){
		let target = document.querySelector('#h1')
		let div = document.createElement('div');

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

