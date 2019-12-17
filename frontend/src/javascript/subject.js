document.addEventListener('DOMContentLoaded',
() => {
  console.log('subject.js is loaded...')
});

let allSubjects = [];

class Subject {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  renderSubject() {
    let button = document.createElement('button');
    let removeIcon = document.createElement('span');

    button.className = 'tablinks';
    button.textContent = `${this.name} `;

    removeIcon.className = 'glyphicon glyphicon-remove-circle';
    removeIcon.id = `delete-subject-${this.id}`;
    removeIcon.setAttribute('data-subject-id', `${this.id}`)

    button.append(removeIcon);

    subjectTabs.append(button);

    let removeBtn = document.getElementById(`delete-subject-${this.id}`)

    removeBtn.addEventListener('click', e => {
      let delObj = {
        method: 'DELETE'
      }

      fetch(`${SUBJECTS_URL}/${e.target.dataset.subjectId}`, delObj)
        .then(resp => resp.json())
        .then(function (json) {
          e.target.parentNode.remove();
          allSubjects.splice(allSubjects.findIndex(subject => subject.id === `${e.target.dataset.subjectId}`), 1)
        })
    })
  }
}

function fetchSubjects() {
  fetch(SUBJECTS_URL)
    .then(parseJSON)
    .then(json => json.data.forEach(subject => {
      let newSubject = new Subject(subject.attributes.name, subject.id)
      allSubjects.push(newSubject);
      newSubject.renderSubject();
  }))
}

function addNewSubject() {
  subjectForm.addEventListener('submit', e => {
    e.preventDefault();
    let subjectName = e.target.name.value;

    let formData = {
      name: subjectName,
    }

    let configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }

    return fetch(SUBJECTS_URL, configObj)
      .then(resp => resp.json())
      .then(subject => {
        let newSubject = new Subject(subject.name, subject.id);
        allSubjects.push(newSubject);
        newSubject.renderSubject();
      })
      .then(clearForm)
      .then(clickAddClass)
  });
}
