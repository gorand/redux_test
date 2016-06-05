import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = []

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        {
          id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
          text: action.text,
          completed: false,
          date: +new Date(),
        },
        ...state
      ]

    case DELETE_ITEM:
      return state.filter(note =>
        note.id !== action.id
      )

    case EDIT_ITEM:
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
