class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :cook_time, :dish_ingredients
  has_many :ingredients
  belongs_to :chef
end
