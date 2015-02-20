class Contestant < ActiveRecord::Base
	self.has_secure_password()	
	self.has_many :games
end