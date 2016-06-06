import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = []

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        {
          id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
          text: action.text,
          completed: false,
          date: +new Date(),
        },
        ...state
      ]

    case DELETE_NOTE:
      return state.filter(note =>
        note.id !== action.id
      )

    case EDIT_NOTE:
      return state.map(note =>
        note.id === action.id ?
          Object.assign({}, note, { text: action.text }) :
          note
      )

    case CLEAR_COMPLETED:
      return state.filter(note => note.completed === false)

    default:
      return state
  }
}
