class AddDateToContestants < ActiveRecord::Migration
  def change
    add_column :contestants, :dateCreated, :timestamp
  end
end
