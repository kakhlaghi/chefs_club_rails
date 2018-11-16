class DishIngredient < ActiveRecord::Base
  belongs_to :dish
  belongs_to :ingredient, required: false
  #accepts_nested_attributes_for :ingredients

end
