class Dish < ApplicationRecord
  has_many :ingredients
  belongs_to :chef
end
