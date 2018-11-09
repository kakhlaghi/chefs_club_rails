require 'pry'
class SessionsController < ApplicationController
  def new
    @chef = Chef.new
    @chefs = Chef.all

  end
  def create
  if auth
    @chef = Chef.find_or_create_by(uid: auth['uid']) do |u|
      u.name = auth['info']['name']
      u.email = auth['info']['email']
      u.image = auth['info']['image']
    end
    session[:chef_id] = @chef.id
    redirect_to chef_path(@chef)
  elsif params
      @chef = Chef.find_by(name: params[:chef][:name])
    if @chef && @chef.authenticate(params[:chef][:password])
      session[:chef_id] = @chef.id
      redirect_to chef_path(@chef), notice: "Welcome back, chef!"
    else
      redirect_to signin_path
    end
  else
   redirect_to signin_path
 end
end


  def destroy
    session[:chef_id] = nil
    redirect_to root_url
  end

  private

  def auth
    request.env['omniauth.auth']
  end

end
