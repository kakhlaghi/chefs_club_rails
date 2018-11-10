class AddEmailUidProviderToChefs < ActiveRecord::Migration[5.2]
  def change
    add_column :chefs, :email, :string
    add_column :chefs, :uid, :string
    add_column :chefs, :provider, :string
  end
end
