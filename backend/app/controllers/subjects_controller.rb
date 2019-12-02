class SubjectsController < ApplicationController
  def index
    subjects = Subject.all
    render json: SubjectSerializer.new(subjects)
  end

  def show
    subject = Subject.find_by(:id => params[:id])
    render json: SubjectSerializer.new(subject)
  end

  def create
    subject = Subject.new(subject_params)
    subject.save
    render json: subject
  end

  private

  def subject_params
    params.require(:subject).permit(:name)
  end
end
