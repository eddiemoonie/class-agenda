document.addEventListener('DOMContentLoaded',
() => {
  console.log('assignment.js is loaded...')
});

class Assignment {
  constructor(name, subject_id, id) {
    this.name = name;
    this.subject_id = subject_id;
    this.id = id;
  }

  renderAssignments() {
    console.log('render assignments');

    let assignLi = document.createElement('li')

    assignLi.className = 'assignment'
    assignLi.textContent = `${this.name}`

    assignList.append(assignLi)
  }
}
