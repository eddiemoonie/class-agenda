document.addEventListener('DOMContentLoaded',
() => {
  console.log('assignment.js is loaded...')
});

let allAssign = [];

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

function fetchAssignments() {
  fetch(ASSIGNMENTS_URL)
    .then(parseJSON)
    .then(json => json.data.forEach(assign => {
      let newAssign = new Assignment(assign.attributes.name, assign.relationships.subject.data.id, assign.id)
      allAssign.push(newAssign);
      newAssign.renderAssignments();
  }))
}

// function addAssignment() {
//   assignForm.addEventListener('submit', e => {
//     e.preventDefault();
//
//     let assign = e.target.name.value
//
//     let formData = {
//       name: assignName,
//       subject_id: subjectId,
//     }
//
//     let configObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     }
//
//     return fetch(ASSIGNMENTS_URL, configObj)
//       .then(resp => resp.json())
//       .then(assign => {
//         let newAssign = new Assignment
//       })
//   })
// }
