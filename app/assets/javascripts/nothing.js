/*function submitIngredients(event){
	let url = window.location.href + '.json'
	event.preventDefault();
	let data = {
		//'authenticity_token': $("input[name='authenticty_token']").val(),
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
	fetch(url,{
		method: 'POST',
		body: JSON.stringify({'name': document.getElementsByClassName('dishName')[0].innerHTML})
	})
	.then(function(res){
		if (res.ok){
			return res
		}
		throw Error(res)
	})
	.then(res => res.json())
	.then(response => console.log('Success:', JSON.stringify(response)))
	.catch(error => console.error('Error:', error));
	debugger
}*/
