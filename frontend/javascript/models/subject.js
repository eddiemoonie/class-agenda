document.addEventListener('DOMContentLoaded',
() => {
  console.log('subject.js is loaded...')
});

class Subject {
  static all = []

  constructor(name, id) {
    this.name = name
    this.id = id
    this.assignments = []

    Subject.all.push(this)
  }

  static postSubject(subjectObj) {

    let formData = {
      'name': subjectObj.name.value
    }

    let configObj = {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    return fetch(Api.SUBJECTS_URL, configObj)
      .then(response => response.json())
      .then(subjectObj => {
        let newSubjectObj = new Subject(subjectObj.name, subjectObj.id)
        return newSubjectObj
      })
      .then(clearForm)
  }

}
