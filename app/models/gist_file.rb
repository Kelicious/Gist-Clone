class GistFile < ActiveRecord::Base
	attr_accessible :body, :gist_id

	belongs_to :gist
end