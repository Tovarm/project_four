class GamesController < ApplicationController

	def index
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")
	  
	  @contestant = Contestant.all
	  # @contestant = Contestant.find(params[:id])

# binding.pry

	end

	def create
		# @contestant = Contestant.find(params["contestant_id"])
		@contestant_id = params["contestant_id"]
		@game = Game.create({contestant_id: params["contestant_id"], username: params["username"], game_score: params["game_score"]})
		redirect_to "/games/contestant/#{@contestant_id}"
		# binding.pry
	end

	def show
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")

 		# @contestant = Contestant.find(params["id"])
	  @contestant = Contestant.find(params[:id])
		@contestant_id = params["contestant_id"]
		@game = Game.all
	# binding.pry

	end

end
