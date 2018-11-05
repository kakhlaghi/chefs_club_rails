class DishesController < ApplicationController
  def new
  end
  def create
    @dish = Dish.new
  end


  private
    def dish_params
      params.require(:dish).permit(
        :name,
        :cook_time
      )
    end
end
