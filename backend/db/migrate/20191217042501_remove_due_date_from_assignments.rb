class RemoveDueDateFromAssignments < ActiveRecord::Migration[6.0]
  def change
    remove_column :assignments, :due_date, :date
  end
end
