class Ingredient < ActiveRecord::Base
  has_many :chefs, through: :dishes
  has_many :dish_ingredients
  has_many :dishes, through: :dish_ingredients
end
