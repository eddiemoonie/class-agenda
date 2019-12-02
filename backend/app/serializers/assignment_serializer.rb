class AssignmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :due_date
  belongs_to :subject
end
