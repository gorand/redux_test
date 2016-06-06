import { UPDATE_TIME } from '../constants/ActionTypes'

const initialState = {};

export default function time(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return state;
    default:
      return state;
  }
}
