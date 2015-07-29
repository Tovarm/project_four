Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'contestants#new'

  resources :games
  resources :contestants
  
  get '/session/new' => 'session#new'

  get '/leaderboard' => 'leaderboard#index'

  get '/leaderboard/contestant/:id' => 'leaderboard#show'

  post '/session' => 'session#create'

  get '/session/delete' => 'session#destroy'

  get '/games/contestant/:id' => 'games#show'

#         Prefix Verb   URI Pattern                           Controller#Action
#            root GET    /                                     games#show
#           games GET    /games(.:format)                      games#index
#                 POST   /games(.:format)                      games#create
#        new_game GET    /games/new(.:format)                  games#new
#       edit_game GET    /games/:id/edit(.:format)             games#edit
#            game GET    /games/:id(.:format)                  games#show
#                 PATCH  /games/:id(.:format)                  games#update
#                 PUT    /games/:id(.:format)                  games#update
#                 DELETE /games/:id(.:format)                  games#destroy
#     contestants GET    /contestants(.:format)                contestants#index
#                 POST   /contestants(.:format)                contestants#create
#  new_contestant GET    /contestants/new(.:format)            contestants#new
# edit_contestant GET    /contestants/:id/edit(.:format)       contestants#edit
#      contestant GET    /contestants/:id(.:format)            contestants#show
#                 PATCH  /contestants/:id(.:format)            contestants#update
#                 PUT    /contestants/:id(.:format)            contestants#update
#                 DELETE /contestants/:id(.:format)            contestants#destroy
#     session_new GET    /session/new(.:format)                session#new
#     leaderboard GET    /leaderboard(.:format)                leaderboard#index
#                 GET    /leaderboard/contestant/:id(.:format) leaderboard#show
#         session POST   /session(.:format)                    session#create
#  session_delete GET    /session/delete(.:format)             session#destroy
#                 GET    /games/contestant/:id(.:format)       games#show


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
