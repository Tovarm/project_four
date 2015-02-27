class Game < ActiveRecord::Base
	
	self.belongs_to :contestant

	def authorize(contestant)
    unless contestant.id == session[:contestant_id]
      render(text: 'Unauthorized', status: 401) and return true
    end

    return false
  end
end	# authorize a user based on his or her session id