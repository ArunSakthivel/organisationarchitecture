Rails.application.routes.draw do
  get 'employee_detail' => 'home#employee_detail'
  get 'employee' => 'home#employee'
  get 'charts' => 'home#chart'
  root 'home#index'
end
