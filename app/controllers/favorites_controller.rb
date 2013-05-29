class FavoritesController < ApplicationController
	respond_to :json

	def create
		@favorite = Favorite.new(user_id: current_user.id,
			 											 gist_id: params[:gist_id])
		if @favorite.save
			render json: @favorite
		else
			render json: @favorite.errors.full_messages, status: 422
		end
	end

	def index
		@favorites = current_user.favorites
		render json: @favorites
	end

	def destroy
		@favorite = current_user.favorites.find_by_gist_id(params[:gist_id])
		@favorite.destroy
		render json: @favorite
	end
end