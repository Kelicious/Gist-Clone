class GistsController < ApplicationController
	respond_to :json, :only => [:index]
	respond_to :html, :only => [:index]

	def index
		if current_user
			@gists = current_user.gists
			respond_to do |format|
				format.html { render :index }
				format.json { render @gists }
			end
		else
			redirect_to new_session_url
		end
	end

	def create
		@gist = current_user.gists.new(params[:gist])
		if @gist.save
			render json: @gist
		else
			render json: @gist.errors.full_messages, status: 422
		end
	end
end