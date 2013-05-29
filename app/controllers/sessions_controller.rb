class SessionsController < ApplicationController
	def new

	end

	def create
		user = User.find_by_name(params[:user][:name])
		if user
			sign_in user
			redirect_to root_url
		else
			flash.now[:error] = "Invalid user name"
			render :new
		end
	end

	def destroy
		sign_out
		redirect_to root_url
	end
end