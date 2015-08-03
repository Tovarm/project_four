class AddTimestampToContestants < ActiveRecord::Migration
  def change
    add_column :contestants, :created_at, :timestamp
  end
end
