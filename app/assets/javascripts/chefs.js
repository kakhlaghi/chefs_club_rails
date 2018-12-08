//favorites

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()
});

function favoritesManager(){
    const baseURL = 'localhost:3000'
    const url = window.location.href 
	if(Favorites){
        fetch(url)
          .then(response=>response.json)
          .then(json)
	}else{
    Favorites.new(dish)
  }
}

class Favorites{
	constructor(dish){
		this.dish = dish;
		this.chef = dish.chef.id
		this.array = [];
	}
}

Favorites.prototype.addToFavorites = function(dish){
	this.array.push(dish)
};

