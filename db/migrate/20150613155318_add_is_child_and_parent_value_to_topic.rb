class AddIsChildAndParentValueToTopic < ActiveRecord::Migration
  def change
    add_column :topics, :is_child, :boolean
    add_column :topics, :parent_value, :integer
  end
end
