class ChefsController < ApplicationController
  has_secure_password
  def new
  end

  def create
  end

  def show
  end

  def update
  end

  private
  def chef_params
    params.require(:user).permit(
    :name,
    :password
    )
  end
end
