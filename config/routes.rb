Rails.application.routes.draw do
  resources :ingredients
  resources :dishes
  resources :chefs
  root 'application#home'
  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  delete "/signout", to: "sessions#destroy"
  get '/auth/:provider/callback' => 'sessions#create'
  get '/chefs/:id/dishes/new' => 'dishes#new'
  get '/chefs/:id/dishes/:id' => 'dishes#show'
  get '/dishes/ingredients/new' => 'ingredients#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
