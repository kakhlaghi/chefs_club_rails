class DishIngredient < ActiveRecord::Base
  belongs_to :dish, required: false
  belongs_to :ingredient, required: false

end
