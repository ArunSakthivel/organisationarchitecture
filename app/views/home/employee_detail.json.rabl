object @employee_details
attributes :id, :name, :yearofexpirence, :pic, :isVisibleChild

node :child do |c|
  { :empDetails => partial("home/all", :object => c.children) } if c.children.present?
end
