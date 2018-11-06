class Dish < ActiveRecord::Base
  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  belongs_to :chef
  
  def chef_name
    self.try(:chef).try(:name)
  end

  def chef_name=(name)
    chef = Chef.find_or_create_by(name: name)
    self.chef = chef
  end
end
