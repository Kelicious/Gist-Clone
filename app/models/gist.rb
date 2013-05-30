class Gist < ActiveRecord::Base
	attr_accessible :title, :user_id, :gist_files_attributes

	belongs_to :user
	has_many :gist_files, dependent: :destroy
	accepts_nested_attributes_for :gist_files
	has_many :favorites

	validates :title, presence: true
end