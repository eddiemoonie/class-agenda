document.addEventListener('DOMContentLoaded',
() => {
  console.log('index.js is loaded...')
});

function clearForm() {
  document.querySelector('.subject-input').value = ""
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

subjectForm.addEventListener('submit', e => {
  e.preventDefault();
  Subject.postSubject(e.target);
  console.log('Subject has been submitted')
});
