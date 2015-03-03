class LeaderboardController < ApplicationController

	def index
  	@contestant = Contestant.order(total_score: :desc)
  	@contestant = Contestant.find_by(params[:id])
# binding.pry
    @game = Game.all 
    @game = Game.order(game_score: :desc)
  end

end