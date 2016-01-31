class HomeController < ApplicationController
  layout :page_layout


  def index
  end

  def chart
  end

  def employee
  end

  def employee_detail
    @employee_details = EmployeeDetail.first
  end

  private

  def page_layout
  	case action_name
  	when 'index'
  		'angular'
  	when 'chart'
  		'chart'
    when 'employee'
      'employee'
  	else
  		'application'
  	end
  end
end
