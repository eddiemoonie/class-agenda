class Api {
  static baseUrl = 'http://localhost:3000'
  static SUBJECTS_URL = `${Api.baseUrl}/subjects`
  static ASSIGNMENTS_URL = `${Api.baseUrl}/assignments`

  static fetchSubjects() {
    return fetch(Api.baseUrl + '/subjects')
      .then(parseJSON)
  }

  static fetchAssignments() {
    return fetch(Api.baseUrl + '/assignments')
      .then(parseJSON)
  }
}
