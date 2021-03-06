# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( Ocharts.css )
Rails.application.config.assets.precompile += %w( bootstrap.min.css )
Rails.application.config.assets.precompile += %w( employee/bootstrap.min.css )
Rails.application.config.assets.precompile += %w( employee/style.css )
Rails.application.config.assets.precompile += %w( angular/angular.min.js )
Rails.application.config.assets.precompile += %w( angular/app.js )
Rails.application.config.assets.precompile += %w( charts/app.js )
Rails.application.config.assets.precompile += %w( charts/angular.min.js )
Rails.application.config.assets.precompile += %w( employee/angular.min.js )
Rails.application.config.assets.precompile += %w( employee/app.js )
