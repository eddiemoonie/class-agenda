class Subject {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  renderSubject() {
    // render subject navigation bar
    let button = document.createElement('button');
    let removeIcon = document.createElement('span');

    button.className = 'tablinks';
    button.textContent = `${this.name} `;

    removeIcon.className = 'glyphicon glyphicon-remove-circle';
    removeIcon.id = `delete-subject-${this.id}`;
    removeIcon.setAttribute('data-subject-id', `${this.id}`)

    button.append(removeIcon);
    subjectTabs.append(button);

    //render subject header
    subjectHead.textContent = `${this.name}`;

    //render assignment form
    renderAssignmentForm();

    // fetchAssignments(`${this.id}`);

    //add assignment
    assignForm.addEventListener('submit', e => {
      e.preventDefault();

      let assignName = e.target.name.value

      let formData = {
        name: assignName,
        subject_id: `${this.id}`,
      }

      let configObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      }

      return fetch(ASSIGNMENTS_URL, configObj)
        .then(resp => resp.json())
        .then(assign => {
          let newAssign = new Assignment(assign.name, assign.subject_id, assign.id)
          console.log(newAssign)
          // allAssign.push(newAssign);
          newAssign.renderAssignments();
          //need to fix this
          // renderSubject(newAssign.subject_id);
          // fetchAssignments(newAssign.subject_id);
        })
        .then(clearAssignForm)
    })

    //delete subject
    let removeBtn = document.getElementById(`delete-subject-${this.id}`)

    //subject tab event listener
    button.addEventListener('click', e => {
      subjectHead.textContent = `${this.name}`;
      renderAssignmentForm();
      assignList.textContent = ''
      fetchAssignments(`${this.id}`)
      //need to fix this
    })

    removeBtn.addEventListener('click', e => {
      let delObj = {
        method: 'DELETE'
      }

      fetch(`${SUBJECTS_URL}/${e.target.dataset.subjectId}`, delObj)
        .then(resp => resp.json())
        .then(function (json) {
          e.target.parentNode.remove();
        })
        .then(clearSubjectView)
    })
  }
}

//fetch subjects
function fetchSubjects() {
  fetch(SUBJECTS_URL)
    .then(parseJSON)
    .then(json => json.data.forEach(subject => {
      let newSubject = new Subject(subject.attributes.name, subject.id)
      console.log(newSubject)
      newSubject.renderSubject();
    }))
}

//add new subject
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
        console.log(newSubject)
        newSubject.renderSubject();
        fetchAssignments(subject.id)
      })
      .then(clearSubjectForm)
      .then(clickAddClass)
  });
}
