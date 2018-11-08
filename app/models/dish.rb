class Dish < ActiveRecord::Base
  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  belongs_to :chef
  accepts_nested_attributes_for :ingredients
  validates :name, presence:{message: "Your dish needs a name!"}

  def chef_name
    self.try(:chef).try(:name)
  end

  def chef_name=(name)
    chef = Chef.find_or_create_by(name: name)
    self.chef = chef
  end

  def ingredient_attributes=(ingredient)
    self.ingredient = Ingredient.find_or_create_by(name: ingredient.name)
    self.ingredient.update(ingredient)
  end


end
