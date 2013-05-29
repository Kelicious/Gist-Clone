class User < ActiveRecord::Base
	before_save :create_remember_token

	attr_accessible :name

	has_many :gists
	has_many :favorites
	has_many :favorite_gists, :through => :favorites, :source => :gist

	validates :name, presence: true, uniqueness: true

	private

	def create_remember_token
		self.remember_token = SecureRandom.urlsafe_base64
	end
end