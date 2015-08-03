class ChangeDateCreatedColumnNameToCreatedAt < ActiveRecord::Migration
  def change
	  rename_column :contestants, :dateCreated, :created_at
  end
end
