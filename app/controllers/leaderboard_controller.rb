class LeaderboardController < ApplicationController

	def index
 		@contestant = Contestant.find(params["id"])
binding.pry
		# @contestant = Contestant.all
    @game = Game.all 
  end

end