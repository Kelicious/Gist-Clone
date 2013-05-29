class User < ActiveRecord::Base
	before_save :create_remember_token

	attr_accessible :name
	validates :name, presence: true, uniqueness: true

	private

	def create_remember_token
		self.remember_token = SecureRandom.urlsafe_base64
	end
end