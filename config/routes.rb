Rails.application.routes.draw do
  get 'charts' => 'home#chart'
  root 'home#index'
end
