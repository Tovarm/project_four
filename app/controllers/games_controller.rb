class GamesController < ApplicationController

	def index
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")
# binding.pry
	  @contestant = Contestant.all
	  @contestant_id = params["id"]
	end

	def create
		@game = Game.create({contestant_id: params["id"], game_score: params["game_score"]})
		redirect_to "/games/contestant/:id"
	end

	def show
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")

 		@contestant = Contestant.find(params["id"])
	  @id = params["id"]
		@game = Game.all
	# binding.pry

	end

end
