class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :cook_time
  has_many :ingredients
  belongs_to :chef
end
