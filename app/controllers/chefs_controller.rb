class ChefsController < ApplicationController

  before_action :set_chef, only: [:show, :edit, :update, :destroy]

  def show
  end

  def new
    @chef = Chef.new
  end

  def create
    @chef = Chef.new(chef_params)
    if @chef.save
      session[:chef_id] = @chef.id
      redirect_to chef_path(@chef)
    else
      render :new
    end
  end

  def update
    if @chef.update(chef_params)
      redirect_to @user
    else
      render :edit
    end
  end

  private
  def set_chef
    @chef = Chef.find(params[:id])
  end

  def chef_params
    params.require(:chef).permit(
    :name,
    :password
    )
  end
end
