Rails.application.routes.draw do
  resources :ingredients
  resources :dishes
  resources :chefs
  root 'applcation#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
