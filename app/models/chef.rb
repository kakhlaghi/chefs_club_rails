class Chef < ActiveRecord::Base
  has_many :dishes
  #has_many :ingredients, through: :dishes
  has_secure_password
  validates :name, presence: {message: "What's your name, chef?"}
  validates :name, uniqueness: {message: "Sorry, we already have a chef by that name."}
  validates :password, presence: true


end
