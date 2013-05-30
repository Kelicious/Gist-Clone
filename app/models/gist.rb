class Gist < ActiveRecord::Base
	attr_accessible :title, :user_id, :gist_file_attributes

	belongs_to :user
	has_one :gist_file
	accepts_nested_attributes_for :gist_file
	has_many :favorites

	validates :title, presence: true
end