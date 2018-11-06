class AddChefToDish < ActiveRecord::Migration[5.2]
  def change
    add_reference :dishes, :chef, index: true, foreign_key: true
  end
end
