class GamesController < ApplicationController

	def index
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")
	  
	  @contestant = Contestant.all
	  @contestant = Contestant.find(params[:id])
		@id = params["contestant_id"]


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

		def api_call(category_id)
		  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		end
		
		api_call(rand(0..18000))
		
		# binding.pry
		while @nil == true do
			first_five = @response["clues"].first(5)
			first_five.each do |question|
				if question["value"] == nil
					question["value"] = "NIL"
				else 		
					question["value"] = question["value"]
				end
			end
		end	


		def api_call2(category_id)
		  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		end
		
		api_call2(rand(0..18000))

		@nil2 = true
		
		while @nil2 == true do
			first_five = @response2["clues"].first(5)
			first_five.each do |question|
				if question["value"] != nil
					@nil2 = false
				else 		
					api_call2(rand(0..18000))
				end
			end
		end	
	

		def api_call3(category_id)
		  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		end
		
		api_call3(rand(0..18000))

		@nil3 = true
		
		while @nil3 == true do
			first_five = @response3["clues"].first(5)
			first_five.each do |question|
				if question["value"] != nil
					@nil3 = false
				else 		
					api_call3(rand(0..18000))
				end
			end
		end	


 		# @contestant = Contestant.find(params["id"])
	  @contestant = Contestant.find(params[:id])
		# @contestant_id = params["contestant_id"]
		@game = Game.all
	# binding.pry

	
	end
end
