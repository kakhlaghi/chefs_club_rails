class IngredientsController < ApplicationController

  def show
    @ingredient = Ingredient.find(params[:id])
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
  end



private


  def ingredients_params
    params.require(:ingredient).permit(
      :name,
      dish_ingredients_attributes: [:quantity]
      )
  end
end
