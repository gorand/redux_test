import { UPDATE_TIME } from '../constants/ActionTypes'

const initialState = {
  currentTime: null
};

export default function time(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return { currentTime: action.time };

    default:
      return state;
  }
}
