class Question < ActiveRecord::Base
	self.belongs_to :contestant

	def self.api_call
		category_id = rand(0..18000)
	  response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
	  return response
	end

	def self.whoami
		return self
	end

end