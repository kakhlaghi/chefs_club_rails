class Ingredient < ActiveRecord::Base
  has_many :chefs, through: :dishes
  has_many :dish_ingredients
  has_many :dishes, through: :dish_ingredients
  validates :name, presence: {message:"Your ingredient needs a name!"}

  def dish_ingredients_attributes=(dish_ingredients_attributes)
    dish_ingredients_attributes.each do |i, dish_ingredient_attributes|
      self.dish_ingredient.build(dish_ingredient_attributes)
    end
  end
end
