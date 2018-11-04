class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.belongs_to :chef, foreign_key: true
      t.belongs_to :dish, foreign_key: true

      t.timestamps
    end
  end
end
