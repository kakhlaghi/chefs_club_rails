class Chef < ApplicationRecord
  has_many :dishes
  has_many :ingredients, through: :dishes
  has_secure_password

end
