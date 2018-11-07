class SessionsController < ApplicationController
  def new
  end
  def create
    @chef = Chef.find_by(name: params[:chef][:name])
 if @chef && @chef.authenticate(params[:chef][:password])
   session[:user_id] = @chef.id
   redirect_to user_path(@chef), notice: "Welcome back, chef!"
 else
   redirect_to signin_path
 end
end


  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

end
