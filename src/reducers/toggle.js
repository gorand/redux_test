import { TOGGLE_LIST } from '../constants/ActionTypes'

const initialState = [
  {
    open: false
  }
]

export default function openList(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LIST:
      return [
        {
          open: true
        }
      ]

    default:
      return state
  }
}
