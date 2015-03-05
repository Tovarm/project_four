class SessionController < ApplicationController

  # GET /session/new
  # get login page with login form
  def new
    @contestant = Contestant.find_by(params["id"])
  end

  # POST /session
  # create a new session for the user
  def create
    contestant = Contestant.find_by(username: params[:username])
    if contestant && contestant.authenticate(params[:password])
      session[:contestant_id] = contestant.id
      redirect_to "/games/contestant/#{contestant.id}"
    else
    # binding.pry
      redirect_to "/"
    end
  end

  # DELETE /session/:id
  # log out of a user's session
  def destroy
    reset_session
    redirect_to "/"
  end

end
