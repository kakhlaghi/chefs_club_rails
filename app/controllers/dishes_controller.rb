class DishesController < ApplicationController
  def new
  end
  def create
    @dish = Dish.new(dish_params)
    if @dish.save
      redirect_to @dish
    else
      render :new
    end
  end


  private
    def dish_params
      params.require(:dish).permit(
        :name,
        :cook_time
      )
    end
end
