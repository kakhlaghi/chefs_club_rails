//favorites

$(function () {
	//listenForIngredientIndex()
	//listenForFetchChefs()
	//newIngredient()
});

function favoritesManager(){
    const baseURL = 'localhost:3000'
    //let url = "/dishes" + 
	if(Favorites){
        fetch
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