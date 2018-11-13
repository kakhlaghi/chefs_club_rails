class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.float :cook_time
      t.timestamps
    end
  end
end
