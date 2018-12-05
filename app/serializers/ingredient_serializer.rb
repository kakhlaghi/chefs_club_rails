class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :dishes, serializer: SimpleDishSerializer
end
