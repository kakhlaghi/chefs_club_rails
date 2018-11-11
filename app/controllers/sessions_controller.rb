require 'pry'
class SessionsController < ApplicationController
  def new
    @chef = Chef.new
    @chefs = Chef.all

  end
  def create
    #github login
    if auth = request.env["omniauth.auth"]
      if @chef = Chef.find_by(email: auth.info.email)
        session[:chef_id] = @chef.id
        redirect_to chef_path(@chef)
      else
        @chef = Chef.create(name: auth.info.name, email: auth.info.email, password: SecureRandom.hex)
        session[:chef_id] = @chef.id
        redirect_to chef_path(@chef)
      end
  #normal login
    elsif params
        @chef = Chef.find_by(name: params[:chef][:name])
      if @chef && @chef.authenticate(params[:chef][:password])
        session[:chef_id] = @chef.id
        redirect_to chef_path(@chef), notice: "Welcome back, chef!"
      else
        redirect_to signin_path
      end
    else
      raise chef.errors.full_messages.inspect
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
