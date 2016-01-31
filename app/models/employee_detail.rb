class EmployeeDetail < ActiveRecord::Base
  has_many :children, :class_name => "EmployeeDetail", :foreign_key => :parent_id
  belongs_to :parent, :class_name => "EmployeeDetail", :foreign_key => :parent_id
end
