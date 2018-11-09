class ApplicationController < ActionController::Base
    before_action :current_user
    before_action :require_logged_in, except: [:new, :create, :home]

    def logged_in?
      !!current_user
    end

    private
      def require_logged_in
        redirect_to root_url unless logged_in?
      end

      def current_user
         @current_user = Chef.find_by_id(session[:user_id])
      end
      helper_method :current_user
end
