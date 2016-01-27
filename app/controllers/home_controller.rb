class HomeController < ApplicationController
  layout :page_layout


  def index
  end

  def chart
  end

  private

  def page_layout
  	case action_name
  	when 'index'
  		'angular'
  	when 'chart'
  		'chart'
  	else
  		'application'
  	end
  end
end
