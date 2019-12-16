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
    button.className = 'tablinks';
    button.textContent = `${this.name}`;
    subjectTabs.append(button);
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
