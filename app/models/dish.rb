class Dish < ActiveRecord::Base
  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  belongs_to :chef

  scope :less_than_30, -> {where('cook_time <= 30')}
  scope :more_than_30, -> {where('cook_time > 30')}
  scope :less_than_60, -> {where('cook_time <= 60')}
  scope :more_than_60,-> {where('cook_time > 60')}

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

   #end ingredient_attributes

  #def dish_ingredients_attributes=(dish_ingredients_attributes)
  #  dish_ingredients_attributes.each do |i, dish_ingredient_attributes|
  #    if dish_ingredient_attributes[:quantity].present?
  #      dish_ingredient = Dish_ingredient.find_or_create_by(quantity: dish_ingredient_attributes[:quantity])
  #      if !self.dish_ingredients.include?(dish_ingredient)
  #        self.dish_ingredients.build(dish_ingredient_attributes)
  #    end
  #  end
  #end
end
