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
		let target = document.querySelector('#favoritesHead')
		let div = document.createElement('p');
		const favoritesArray = favoriteStore["faveDishes"][0]["array"];
		for(i=0;i<favoritesArray.length;i++){
			div.innerHTML = favoriteStore["faveDishes"][0]["array"][i]["name"];
		}
		target.parentNode.insertBefore(div, target);
		//$("<span>Hello world!</span>").insertAfter("h2");
		
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


