import { UPDATE_TIME } from '../constants/ActionTypes'

const initialState = {
  current: null
};

export default function time(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        current: action.time
      }
    default:
      return state
  }
}
