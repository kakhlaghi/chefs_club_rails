Rails.application.routes.draw do
  resources :ingredients
  resources :dishes
  resources :chefs
  root 'application#home'
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  delete "/signout", to: "sessions#destroy"
  get '/auth/facebook/callback' => 'sessions#create'

  #get '/chefs/:id/dishes/:id' =>
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
