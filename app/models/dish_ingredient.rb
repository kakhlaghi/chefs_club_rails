class DishIngredient < ActiveRecord::Base
  belongs_to :dish
  belongs_to :ingredient, required: false
  accepts_nested_attributes_for :ingredients

  def ingredients_attributes=(ingredients_attributes)
    ingredients_attributes.each do |i, ingredient_attributes|
        #category = Category.find_or_create_by(category_attributes)
        if ingredient_attributes[:name].present?
          ingredient = Ingredient.find_or_create_by(name: ingredient_attributes[:name])
          if !self.ingredients.include?(ingredient)
          #self.categories << category is inefficient
            self.ingredients.build(ingredient_attributes) #avoids an extra step DOES EXACTLY what we want and nothing else 53:46
          end
        end
      end
    end

end
