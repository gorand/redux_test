import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = []

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          completed: false,
          date: +new Date(),
        },
        ...state
      ]

    case DELETE_ITEM:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_ITEM:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
