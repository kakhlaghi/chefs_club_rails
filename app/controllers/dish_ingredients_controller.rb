class DishIngredientsController < ApplicationController

  def show
    @dish_ingredient = Dish_ingredient.find(params[:id])
  end
  private

    def dish_ingredients_params
      params.require(:dish_ingredient).permit(
        :quantity
        )
    end
end
