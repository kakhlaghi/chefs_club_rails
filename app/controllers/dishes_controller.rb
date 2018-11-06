class DishesController < ApplicationController
  before_action :set_dish, only: [:show, :edit, :update, :destroy]

  def new
    @dish = Dish.new
  end
  def create
    @dish = Dish.new(dish_params)
    if @dish.save
      redirect_to @dish
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
    redirect_to :index
  end

  private
    def dish_params
      params.require(:dish).permit(
        :name,
        :cook_time
      )
    end
end
