require 'pry'
class DishesController < ApplicationController
  before_action :set_dish, only: [:show, :edit, :update, :destroy]

  def show
    @dish = Dish.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @dish}
    end
    #render json: @dish.to_json
  end

  def new
    @dish = Dish.new(chef_id: params[:chef_id])
    @chef = current_user
    render :partial => 'dishes/form'
  end

  def create
    @dish = Dish.new(dish_params)
    #@dish.reject {|item| !item.present?}
    @dish.chef_id = session[:chef_id]
    @chef = current_user
    if @dish.save
      #redirect_to chef_path(session[:chef_id])
      respond_to do |format|
        format.html {render @chef}
        format.json {render json: @chef}
      end
    else
      #render :new
      render json: @dish, status: 406
    end
  end

  def edit
    #@dish = Dish.find_by(params[:id])
  end

  def update
    if @dish.update(dish_params)
      redirect_to @dish
    else
      render :edit
    end
  end

  def destroy
    @chef = @dish.chef
    @dish.dish_ingredients.destroy_all
    @dish.destroy
    redirect_to chef_path(@chef)
  end

  private
  def set_dish
    @dish = Dish.find(params[:id])
  end

    def dish_params
      params.require(:dish).permit(
        :name,
        :cook_time,
        dish_ingredients_attributes: [:quantity,
        ingredients: [:name]]
      )
    end
end
