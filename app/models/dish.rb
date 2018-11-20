require 'pry'
class Dish < ActiveRecord::Base
  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  belongs_to :chef

  scope :less_than_30, -> {where('cook_time <= 30')}
  scope :more_than_30, -> {where('cook_time > 30')}
  scope :less_than_60, -> {where('cook_time <= 60')}
  scope :more_than_60,-> {where('cook_time > 60')}
  accepts_nested_attributes_for :ingredients
  accepts_nested_attributes_for :dish_ingredients
  validates :name, presence: {message:"Your dish needs a name!"}
  validates :cook_time, numericality: { greater_than: 0 }

  def chef_name
    self.try(:chef).try(:name)
  end

  def chef_name=(name)
    chef = Chef.find_or_create_by(name: name)
    self.chef = chef
  end

  def ingredients_attributes=(ingredients_attributes)
    binding.pry
    ingredients_attributes.each do |i, ingredient_attributes|
        #category = Category.find_or_create_by(category_attributes)
        if ingredient_attributes[:name].present?
          ingredient = Ingredient.find_or_create_by(name: ingredient_attributes[:name])
      #self.categories << category is inefficient
          self.dish_ingredients.build(ingredient: ingredient, quantity: ingredients_attribute["dish_ingredients"]["quantity"])
      #avoids an extra step DOES EXACTLY what we want and nothing else 53:46
        end
      end
    end #end ingredient_attributes

  def dish_ingredients_attributes=(dish_ingredients_attributes)
    dish_ingredients_attributes.each do |i, dish_ingredient_attributes|
      binding.pry
      if dish_ingredient_attributes["ingredients"].present?
        #dish_ingredient = Dish_ingredients.find_or_create_by(quantity: dish_ingredient_attributes["quantity"])
        ingredient = Ingredient.find_or_create_by(name: [dish_ingredient_attributes["ingredients"]["name"]])
        if !self.dish_ingredients.include?(ingredient)
          self.dish_ingredients.build(:quantity => [dish_ingredient_attributes["quantity"]], :ingredient => ingredient)
      end
    end
  end
end

end
