class CreateContestants < ActiveRecord::Migration
  def change
    create_table :contestants do |t|
    	t.string :name
    	t.string :username
    	t.string :email
    	t.string :password_digest
    	t.integer :total_score
    end
  end
end

