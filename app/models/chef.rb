class Chef < ActiveRecord::Base
  has_many :dishes
  has_many :ingredients, through: :dishes
  has_secure_password
  validates :name, presence: true

end
