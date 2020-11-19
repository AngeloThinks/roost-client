import React from 'react'

export default React.createContext({
  students: [],
  rosters: [],
  addFolder: () => {},
  addNote: () => {},
  deleteNote: () => {},
})