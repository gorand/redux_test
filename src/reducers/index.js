import { combineReducers } from 'redux'
import todos from './todos'
import timer from './timer'

const rootReducer = combineReducers({
  todos,
  timer
})

export default rootReducer
