class CreateDishingredients < ActiveRecord::Migration[5.2]
  def change
    create_table :dishingredients do |t|
      t.integer :quantity
      t.belongs_to :ingredient, index: true, foreign_key: true
      t.belongs_to :dish, index: true, foreign_key: true
    end
  end
end
