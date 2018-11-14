class DishIngredient < ActiveRecord::Base
  belongs_to :dish
  belongs_to :ingredient, required: false
  validates :quantity, numericality: { greater_than: 0 } 

end
