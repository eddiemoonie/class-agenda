document.addEventListener('DOMContentLoaded',
() => {
  console.log('globals.js is loaded...')
});

const renderFormBtn = document.getElementById('render-form-button')
const subjectForm = document.getElementById('subject-form-container')
const addSubjectBtn = document.getElementById('add-subject-button')
const addAssignmentBtn = document.getElementById('add-assignment-button')

let renderForm = false
