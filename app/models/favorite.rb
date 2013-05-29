class Favorite < ActiveRecord::Base
	attr_accessible :user_id, :gist_id

	belongs_to :user
	belongs_to :gist

	validates :user_id, :gist_id, presence: true
	validates_uniqueness_of :user_id, scope: :gist_id
end