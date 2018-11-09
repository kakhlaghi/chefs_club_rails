class Dish < ActiveRecord::Base
  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  belongs_to :chef
  accepts_nested_attributes_for :ingredients
  accepts_nested_attributes_for :dish_ingredients

  def chef_name
    self.try(:chef).try(:name)
  end

  def chef_name=(name)
    chef = Chef.find_or_create_by(name: name)
    self.chef = chef
  end

  def ingredients_attributes=(ingredients_attributes)
    ingredients_attributes.each do |i, ingredient_attributes|
        #category = Category.find_or_create_by(category_attributes)
        if ingredient_attributes[:name].present?
          ingredient = Ingredient.find_or_create_by(name: ingredient_attributes[:name])
          if !self.ingredients.include?(ingredient)
          #self.categories << category is inefficient
            self.ingredients.build(:ingredient => ingredient) #avoids an extra step DOES EXACTLY what we want and nothing else 53:46
          end
        end
      end
    end #end ingredient_attributes

  def dish_ingredients_attributes=(dish_ingredients_attributes)
    dish_ingredients_attributes.each do |i, dish_ingredient_attributes|
      self.dish_ingredient.build(dish_ingredient_attributes)
    end
  end
end
