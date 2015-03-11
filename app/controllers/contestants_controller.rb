class ContestantsController < ApplicationController

	def index
    @game = Game.all
		@contestant = Contestant.all
		@contestant = Contestant.find_by(params["id"])
    @id = params["id"]
  end

  def new
    @contestant = Contestant.new
  end

  def create
   #  if Contestant.exists?(:username => "#{params["username"]}")
   #    redirect_to "/session/new"
   #  else
  	@contestant = Contestant.create({name: params["name"], username: params["username"], email: params["email"], password: params["password"], total_score: params["total_score"]})

  	redirect_to "/session/new"
  # end
end

  def show
    @contestant = Contestant.find(params[:id])
    @game = Game.all
    @contestant = Contestant.all
    @id = params["id"]
  end


  def edit

  end

  def update
  	
  end

end