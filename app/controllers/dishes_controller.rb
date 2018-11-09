require 'pry'
class DishesController < ApplicationController
  #before_action :set_dish, only: [:show, :edit, :update, :destroy]

  def show
    @dish = Dish.find(params[:id])
  end

  def new
    @dish = Dish.new
    @dish.ingredients.build
  end

  def create
    @dish = Dish.new(dish_params)
    @dish.chef_id = session[:chef_id]
    if @dish.save
      redirect_to chef_path(session[:chef_id])
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @dish.update(dish_params)
      redirect_to @dish
    else
      render :edit
    end
  end

  def destroy
    @dish.destroy
    redirect_to @dish.chef
  end

  private
    def dish_params
      params.require(:dish).permit(
        :name,
        :cook_time,
        ingredients_ids:[],
        ingredient_attributes: [:name],
        dish_ingredient_attributes:[:quantity]
      )
    end
end
