class Ingredient < ActiveRecord::Base
  #has_many :chefs, through: :dishes
  has_many :dish_ingredients
  has_many :dishes, through: :dish_ingredients

  #validates :name, presence: {message:"Your ingredient needs a name!"}
  accepts_nested_attributes_for :dish_ingredients

  #def dish_ingredients_attributes=(dish_ingredients_attributes)
  #  dish_ingredients_attributes.each do |i, dish_ingredient_attributes|
  #    if dish_ingredient_attributes[:ingredient_id].present?
  #      dish_ingredient = Dish_ingredient.find_or_create_by(ingredient_id: dish_ingredient_attributes[:ingredient_id])
  #      if !self.dish_ingredients.include?(dish_ingredient)
  #        self.dish_ingredients.build(dish_ingredient_attributes)
  #      end
  #    end
  #  end
  #end
end
