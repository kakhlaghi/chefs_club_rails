class Ingredient < ApplicationRecord
  belongs_to :chef
  belongs_to :dish
end
