
export const findRoster = (rosters=[], rosterId) =>
rosters.find(roster => roster.id === rosterId)

export const findStudent = (students=[], studentId) =>
students.find(student => student.id === studentId)

export const getStudentsForRoster = (students=[], rosterId) => (
(!rosterId)
  ? students
  : students.filter(note => note.roster_id === rosterId)
)

export const countStudentsForRoster = (students=[], rosterId) =>
students.filter(note => note.roster_id === rosterId).length
