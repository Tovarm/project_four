class RemoveCreatedAtFromContestants < ActiveRecord::Migration
  def change
    remove_column :contestants, :created_at, :timestamp
  end
end
