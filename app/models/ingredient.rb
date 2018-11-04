class Ingredient < ApplicationRecord
  has_many :chefs
  has_many :dish_ingredients
  has_many :dishes, through: :dish_ingredients
end
