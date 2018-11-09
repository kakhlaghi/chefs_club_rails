class IngredientsController < ApplicationController

  def show
    @ingredient = Ingredient.find(params[:id])
  end

  #def new
  #end
  #def create
  #  @ingredient = Ingredient.new(ingredients_params)
  #  if @ingredient.save

  #  else
  #    render :new
  #  end
  #end
  #def update
  #end
private

  def ingredients_params
    params.require(:ingredient).permit(
      :name,
      dish_ingredients_attributes: [:quantity]
      )
  end
end
