document.addEventListener('DOMContentLoaded',
() => {
  fetchSubjects();
  addNewSubject();
  console.log('index.js is loaded...');
});

function clearForm() {
  document.querySelector('.subject-input').value = ""
}

function clearSubjectView() {
  subjectHead.textContent = '';
  assignForm.style.visibility = 'hidden';
}

function clickAddClass() {
  renderFormBtn.click()
}

function renderAssignmentForm() {
  console.log('rendering...');
  if(assignForm.style.visibility = 'hidden') {
    assignForm.style.visibility = 'visible';
  }
}

renderFormBtn.addEventListener('click', e => {
  console.log('add class button was clicked');
  if(subjectForm.style.display === 'block') {
    e.preventDefault();
    renderFormBtn.style.backgroundColor = '#f1f1f1';
    subjectForm.style.display = 'none';
  } else {
    e.preventDefault();
    renderFormBtn.style.backgroundColor = '#BBBBB9';
    subjectForm.style.display = 'block';
  }
});
