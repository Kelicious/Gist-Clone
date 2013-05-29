class CreateGistFiles < ActiveRecord::Migration
  def change
		create_table :gist_files do |t|
			t.integer :gist_id
			t.text :body
		end

		add_index :gist_files, :gist_id
  end
end
