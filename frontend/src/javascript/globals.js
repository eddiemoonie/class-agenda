document.addEventListener('DOMContentLoaded',
() => {
  console.log('globals.js is loaded...')
});

const baseUrl = 'http://localhost:3000'
const SUBJECTS_URL = `${baseUrl}/subjects`
const ASSIGNMENTS_URL = `${baseUrl}/assignments`

const parseJSON = response => response.json()

const renderFormBtn = document.getElementById('render-form-button')
const subjectForm = document.getElementById('subject-form-container')
const addSubjectBtn = document.getElementById('add-subject-button')
const addAssignmentBtn = document.getElementById('add-assignment-button')

const subjectTabs = document.getElementById('subjects')

let renderForm = false
